import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Verify current version. If specified must be set to v2
 */
export declare enum VerifyCapabilityVersionEnum {
    V2 = "v2"
}
export declare enum VerifyCapabilityWebhooksStatusUrlHttpMethodEnum {
    Post = "POST"
}
/**
 * Vonage will send request status events (e.g. `progress`, `complete`) to this URL
 */
export declare class VerifyCapabilityWebhooksStatusUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: VerifyCapabilityWebhooksStatusUrlHttpMethodEnum;
}
export declare class VerifyCapabilityWebhooks extends SpeakeasyBase {
    /**
     * Vonage will send request status events (e.g. `progress`, `complete`) to this URL
     */
    statusUrl?: VerifyCapabilityWebhooksStatusUrl;
}
/**
 * Two factor authentication related configuration
 */
export declare class VerifyCapability extends SpeakeasyBase {
    /**
     * Verify current version. If specified must be set to v2
     */
    version?: VerifyCapabilityVersionEnum;
    webhooks?: VerifyCapabilityWebhooks;
}
