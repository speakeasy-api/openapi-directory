/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GistsUnstarRequest extends SpeakeasyBase {
  /**
   * The unique identifier of the gist.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=gist_id",
  })
  gistId: string;
}

export class GistsUnstarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Forbidden
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
