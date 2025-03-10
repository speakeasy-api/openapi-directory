/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AdvertiserGroup } from "./advertisergroup";
import { Expose, Type } from "class-transformer";

/**
 * Advertiser Group List Response
 */
export class AdvertiserGroupsListResponse extends SpeakeasyBase {
  /**
   * Advertiser group collection.
   */
  @SpeakeasyMetadata({ elemType: AdvertiserGroup })
  @Expose({ name: "advertiserGroups" })
  @Type(() => AdvertiserGroup)
  advertiserGroups?: AdvertiserGroup[];

  /**
   * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * Pagination token to be used for the next list operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;
}
