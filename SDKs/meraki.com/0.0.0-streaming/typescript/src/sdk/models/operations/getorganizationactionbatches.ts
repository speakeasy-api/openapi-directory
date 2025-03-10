/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Filter batches by status. Valid types are pending, completed, and failed.
 */
export enum GetOrganizationActionBatchesStatusEnum {
  Completed = "completed",
  Failed = "failed",
  Pending = "pending",
}

export class GetOrganizationActionBatchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=organizationId",
  })
  organizationId: string;

  /**
   * Filter batches by status. Valid types are pending, completed, and failed.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: GetOrganizationActionBatchesStatusEnum;
}

export class GetOrganizationActionBatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successful operation
   */
  @SpeakeasyMetadata()
  getOrganizationActionBatches200ApplicationJSONObjects?: Record<string, any>[];
}
