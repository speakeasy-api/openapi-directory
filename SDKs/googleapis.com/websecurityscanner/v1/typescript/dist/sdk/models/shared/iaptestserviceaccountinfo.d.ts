import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.
 */
export declare class IapTestServiceAccountInfo extends SpeakeasyBase {
    /**
     * Required. Describes OAuth2 client id of resources protected by Identity-Aware-Proxy (IAP).
     */
    targetAudienceClientId?: string;
}
