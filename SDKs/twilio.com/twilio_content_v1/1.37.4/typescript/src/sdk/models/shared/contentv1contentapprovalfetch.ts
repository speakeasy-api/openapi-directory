import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentV1ContentApprovalFetch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=whatsapp" })
  whatsapp?: any;
}
