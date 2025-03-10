/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetUserEarningsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  mwoAuth: string;
}

export class GetUserEarningsRequest extends SpeakeasyBase {
  /**
   * User ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: number;
}

export class GetUserEarningsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Earnings for vendors
   */
  @SpeakeasyMetadata()
  earnings?: shared.Earnings;

  /**
   * UserNotFound
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
