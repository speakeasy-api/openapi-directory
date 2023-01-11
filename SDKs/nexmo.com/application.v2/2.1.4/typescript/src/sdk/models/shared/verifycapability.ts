import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VerifyCapabilityVersionEnum {
    V2 = "v2"
}

export enum VerifyCapabilityWebhooksStatusUrlHttpMethodEnum {
    Post = "POST"
}


// VerifyCapabilityWebhooksStatusUrl
/** 
 * Vonage will send request status events (e.g. `progress`, `complete`) to this URL
**/
export class VerifyCapabilityWebhooksStatusUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: VerifyCapabilityWebhooksStatusUrlHttpMethodEnum;
}


export class VerifyCapabilityWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status_url" })
  statusUrl?: VerifyCapabilityWebhooksStatusUrl;
}


// VerifyCapability
/** 
 * Two factor authentication related configuration
**/
export class VerifyCapability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: VerifyCapabilityVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: VerifyCapabilityWebhooks;
}
