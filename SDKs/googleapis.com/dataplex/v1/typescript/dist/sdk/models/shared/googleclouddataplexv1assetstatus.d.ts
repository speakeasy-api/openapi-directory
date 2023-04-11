import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Aggregated status of the underlying assets of a lake or zone.
 */
export declare class GoogleCloudDataplexV1AssetStatus extends SpeakeasyBase {
    /**
     * Number of active assets.
     */
    activeAssets?: number;
    /**
     * Number of assets that are in process of updating the security policy on attached resources.
     */
    securityPolicyApplyingAssets?: number;
    /**
     * Last update time of the status.
     */
    updateTime?: string;
}
