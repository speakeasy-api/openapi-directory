/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateImageRegionsJsonRequest extends SpeakeasyBase {
  /**
   * Batch of image regions which include a tag and bounding box. Limited to 64
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  imageRegionCreateBatch: shared.ImageRegionCreateBatch;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Training-Key",
  })
  trainingKey: string;

  /**
   * The project id
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=projectId",
  })
  projectId: string;
}

export class CreateImageRegionsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  imageRegionCreateSummary?: shared.ImageRegionCreateSummary;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
