/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class SubmitPodcastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "request, media_type=application/x-www-form-urlencoded",
  })
  submitPodcastForm: shared.SubmitPodcastForm;

  /**
   * Get API Key on listennotes.com/api
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-ListenAPI-Key",
  })
  xListenAPIKey: string;
}

export class SubmitPodcastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  submitPodcastResponse?: shared.SubmitPodcastResponse;
}
