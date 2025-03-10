/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Java type: com.noosh.nooshapi.vo.RfqVO
 */
export class RfqVO extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "rfq_id" })
  rfqId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status_code" })
  statusCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status_reason" })
  statusReason?: string;
}
