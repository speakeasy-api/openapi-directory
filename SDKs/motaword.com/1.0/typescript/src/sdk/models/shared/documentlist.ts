/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Document } from "./document";
import { PagingMeta } from "./pagingmeta";
import { Expose, Type } from "class-transformer";

/**
 * Document list
 */
export class DocumentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Document })
  @Expose({ name: "documents" })
  @Type(() => Document)
  documents?: Document[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => PagingMeta)
  meta?: PagingMeta;
}
