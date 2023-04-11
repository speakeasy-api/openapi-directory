import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for checking if a notebook instance is upgradeable.
 */
export declare class IsInstanceUpgradeableResponse extends SpeakeasyBase {
    /**
     * The new image self link this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true.
     */
    upgradeImage?: string;
    /**
     * Additional information about upgrade.
     */
    upgradeInfo?: string;
    /**
     * The version this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true.
     */
    upgradeVersion?: string;
    /**
     * If an instance is upgradeable.
     */
    upgradeable?: boolean;
}
