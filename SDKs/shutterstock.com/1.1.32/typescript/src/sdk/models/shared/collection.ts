/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CollectionItem } from "./collectionitem";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Metadata about a collection of assets
 */
export class Collection extends SpeakeasyBase {
  /**
   * Metadata about an item that is part of a collection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cover_item" })
  @Type(() => CollectionItem)
  coverItem?: CollectionItem;

  /**
   * When the collection was created
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdTime?: Date;

  /**
   * The collection ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The last time this collection's items were updated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "items_updated_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  itemsUpdatedTime?: Date;

  /**
   * The name of the collection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * A code that can be used to share the collection (optional)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "share_code" })
  shareCode?: string;

  /**
   * The browser URL that can be used to share the collection (optional)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "share_url" })
  shareUrl?: string;

  /**
   * The number of items in the collection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_item_count" })
  totalItemCount: number;

  /**
   * The last time the collection was update (other than changes to the items in it)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedTime?: Date;
}
