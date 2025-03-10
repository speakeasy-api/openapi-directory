/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostV01SoundTouchStopSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class PostV01SoundTouchStopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  soundTouchStopResponse?: shared.SoundTouchStopResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
