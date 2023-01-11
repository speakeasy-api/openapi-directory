import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest
/** 
 * The migrate key request message.
**/
export class GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=skipBillingCheck" })
  skipBillingCheck?: boolean;
}
