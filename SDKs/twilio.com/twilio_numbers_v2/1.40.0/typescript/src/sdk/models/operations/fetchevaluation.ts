/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export const FetchEvaluationServerList = [
  "https://numbers.twilio.com",
] as const;

export class FetchEvaluationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class FetchEvaluationRequest extends SpeakeasyBase {
  /**
   * The unique string that we created to identify the Bundle resource.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=BundleSid",
  })
  bundleSid: string;

  /**
   * The unique string that identifies the Evaluation resource.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export class FetchEvaluationResponse extends SpeakeasyBase {
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
  numbersV2RegulatoryComplianceBundleEvaluation?: shared.NumbersV2RegulatoryComplianceBundleEvaluation;
}
