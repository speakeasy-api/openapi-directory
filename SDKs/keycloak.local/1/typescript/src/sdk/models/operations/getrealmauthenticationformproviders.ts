/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetRealmAuthenticationFormProvidersRequest extends SpeakeasyBase {
  /**
   * realm name (not id!)
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=realm",
  })
  realm: string;
}

export class GetRealmAuthenticationFormProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * success
   */
  @SpeakeasyMetadata()
  getRealmAuthenticationFormProviders2XXApplicationJSONObjects?: Record<
    string,
    any
  >[];
}
