import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Omniture Integration Settings.
 */
export declare class OmnitureSettings extends SpeakeasyBase {
    /**
     * Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true.
     */
    omnitureCostDataEnabled?: boolean;
    /**
     * Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled.
     */
    omnitureIntegrationEnabled?: boolean;
}
