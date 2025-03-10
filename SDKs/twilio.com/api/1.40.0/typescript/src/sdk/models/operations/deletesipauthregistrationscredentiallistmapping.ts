/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export const DeleteSipAuthRegistrationsCredentialListMappingServerList = [
  "https://api.twilio.com",
] as const;

export class DeleteSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class DeleteSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to delete.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=AccountSid",
  })
  accountSid: string;

  /**
   * The SID of the SIP domain that contains the resources to delete.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=DomainSid",
  })
  domainSid: string;

  /**
   * The Twilio-provided string that uniquely identifies the CredentialListMapping resource to delete.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export class DeleteSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
