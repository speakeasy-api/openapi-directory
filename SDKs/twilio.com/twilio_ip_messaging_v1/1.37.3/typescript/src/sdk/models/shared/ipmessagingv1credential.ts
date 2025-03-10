import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CredentialEnumPushServiceEnum } from "./credentialenumpushserviceenum";



export class IpMessagingV1Credential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=sandbox" })
  sandbox?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CredentialEnumPushServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
