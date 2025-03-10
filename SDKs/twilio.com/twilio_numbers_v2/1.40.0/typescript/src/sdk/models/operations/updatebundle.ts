/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export const UpdateBundleServerList = ["https://numbers.twilio.com"] as const;

export class UpdateBundleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class UpdateBundleUpdateBundleRequest extends SpeakeasyBase {
  /**
   * The email address that will receive updates when the Bundle resource changes status.
   */
  @SpeakeasyMetadata({ data: "form, name=Email" })
  email?: string;

  /**
   * The string that you assigned to describe the resource.
   */
  @SpeakeasyMetadata({ data: "form, name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Status" })
  status?: shared.BundleEnumStatusEnum;

  /**
   * The URL we call to inform your application of status changes.
   */
  @SpeakeasyMetadata({ data: "form, name=StatusCallback" })
  statusCallback?: string;
}

export class UpdateBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "request, media_type=application/x-www-form-urlencoded",
  })
  requestBody?: UpdateBundleUpdateBundleRequest;

  /**
   * The unique string that we created to identify the Bundle resource.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export class UpdateBundleResponse extends SpeakeasyBase {
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
  numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
