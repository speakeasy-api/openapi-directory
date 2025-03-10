/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Commission } from "./commission";
import { PagingMeta } from "./pagingmeta";
import { Expose, Type } from "class-transformer";

/**
 * Commissions for client.
 */
export class CommissionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Commission })
  @Expose({ name: "commissions" })
  @Type(() => Commission)
  commissions?: Commission[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => PagingMeta)
  meta?: PagingMeta;
}
