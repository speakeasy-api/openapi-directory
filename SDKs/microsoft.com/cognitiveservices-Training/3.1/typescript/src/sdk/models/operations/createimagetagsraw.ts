/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateImageTagsRawRequest extends SpeakeasyBase {
  /**
   * Batch of image tags. Limited to 128 tags per batch.
   */
  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  requestBody: Uint8Array;

  /**
   * API key.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Training-Key",
  })
  trainingKey: string;

  /**
   * The project id.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=projectId",
  })
  projectId: string;
}

export class CreateImageTagsRawResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error response
   */
  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  imageTagCreateSummary?: shared.ImageTagCreateSummary;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
