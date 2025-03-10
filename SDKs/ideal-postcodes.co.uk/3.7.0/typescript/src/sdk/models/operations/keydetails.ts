/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class KeyDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=false;name=user_token",
  })
  userToken?: string;
}

export class KeyDetailsResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  apiKeyDetailsResponse?: shared.ApiKeyDetailsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Unauthorised
   */
  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
