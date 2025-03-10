/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ResetApiKeyFromGroupQuotasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class ResetApiKeyFromGroupQuotasRequest extends SpeakeasyBase {
  /**
   * the api key id
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=clientId",
  })
  clientId: string;

  /**
   * The api key group id
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=groupId",
  })
  groupId: string;
}

export class ResetApiKeyFromGroupQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful operation
   */
  @SpeakeasyMetadata()
  quotas?: shared.Quotas;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
