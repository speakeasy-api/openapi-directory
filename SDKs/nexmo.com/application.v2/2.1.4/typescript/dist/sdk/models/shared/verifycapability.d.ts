import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VerifyCapabilityVersionEnum {
    V2 = "v2"
}
export declare enum VerifyCapabilityWebhooksStatusUrlHttpMethodEnum {
    Post = "POST"
}
/**
 * Vonage will send request status events (e.g. `progress`, `complete`) to this URL
**/
export declare class VerifyCapabilityWebhooksStatusUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: VerifyCapabilityWebhooksStatusUrlHttpMethodEnum;
}
export declare class VerifyCapabilityWebhooks extends SpeakeasyBase {
    statusUrl?: VerifyCapabilityWebhooksStatusUrl;
}
/**
 * Two factor authentication related configuration
**/
export declare class VerifyCapability extends SpeakeasyBase {
    version?: VerifyCapabilityVersionEnum;
    webhooks?: VerifyCapabilityWebhooks;
}
