import { SpeakeasyBase } from "../../../internal/utils";
import { IapTestServiceAccountInfo } from "./iaptestserviceaccountinfo";
/**
 * Describes authentication configuration for Identity-Aware-Proxy (IAP).
 */
export declare class IapCredential extends SpeakeasyBase {
    /**
     * Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.
     */
    iapTestServiceAccountInfo?: IapTestServiceAccountInfo;
}
