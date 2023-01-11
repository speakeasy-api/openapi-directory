import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput
/** 
 * Information about a verification endpoint that can be used for 2FA.
**/
export class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}


// GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo
/** 
 * Information about a verification endpoint that can be used for 2FA.
**/
export class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=lastVerificationTime" })
  lastVerificationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=requestToken" })
  requestToken?: string;
}
