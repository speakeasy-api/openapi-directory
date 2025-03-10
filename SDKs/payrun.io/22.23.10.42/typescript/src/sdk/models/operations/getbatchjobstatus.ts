/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetBatchJobStatusRequest extends SpeakeasyBase {
  /**
   * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Api-Version",
  })
  apiVersion: string;

  /**
   * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Authorization",
  })
  authorization: string;

  /**
   * The job unique identifier.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=JobId",
  })
  jobId: string;
}

export class GetBatchJobStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
