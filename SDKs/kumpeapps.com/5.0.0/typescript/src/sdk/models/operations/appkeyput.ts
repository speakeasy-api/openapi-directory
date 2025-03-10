/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AppkeyPutSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-Auth",
  })
  appKey: string;
}

export class AppkeyPutRequest extends SpeakeasyBase {
  /**
   * app key to deactivate
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=app_key",
  })
  appKey: string;
}

export class AppkeyPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * App key deactivated
   */
  @SpeakeasyMetadata()
  inlineResponse202?: shared.InlineResponse202;
}
