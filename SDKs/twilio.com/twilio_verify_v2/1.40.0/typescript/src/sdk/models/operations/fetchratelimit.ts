/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export const FetchRateLimitServerList = ["https://verify.twilio.com"] as const;

export class FetchRateLimitSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class FetchRateLimitRequest extends SpeakeasyBase {
  /**
   * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ServiceSid",
  })
  serviceSid: string;

  /**
   * The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export class FetchRateLimitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
