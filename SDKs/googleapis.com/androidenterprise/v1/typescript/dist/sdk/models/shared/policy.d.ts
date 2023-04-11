import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindow } from "./maintenancewindow";
import { ProductPolicy } from "./productpolicy";
/**
 * Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency. When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect. "choiceToTheUser" allows the device's user to configure the app update policy. "always" enables auto updates. "never" disables auto updates. "wifiOnly" enables auto updates only when the device is connected to wifi.
 */
export declare enum PolicyAutoUpdatePolicyEnum {
    AutoUpdatePolicyUnspecified = "autoUpdatePolicyUnspecified",
    ChoiceToTheUser = "choiceToTheUser",
    Never = "never",
    WifiOnly = "wifiOnly",
    Always = "always"
}
/**
 * Whether the device reports app states to the EMM. The default value is "deviceReportDisabled".
 */
export declare enum PolicyDeviceReportPolicyEnum {
    DeviceReportPolicyUnspecified = "deviceReportPolicyUnspecified",
    DeviceReportDisabled = "deviceReportDisabled",
    DeviceReportEnabled = "deviceReportEnabled"
}
/**
 * The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default.
 */
export declare enum PolicyProductAvailabilityPolicyEnum {
    ProductAvailabilityPolicyUnspecified = "productAvailabilityPolicyUnspecified",
    Whitelist = "whitelist",
    All = "all"
}
/**
 * The device policy for a given managed device.
 */
export declare class Policy extends SpeakeasyBase {
    /**
     * Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency. When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect. "choiceToTheUser" allows the device's user to configure the app update policy. "always" enables auto updates. "never" disables auto updates. "wifiOnly" enables auto updates only when the device is connected to wifi.
     */
    autoUpdatePolicy?: PolicyAutoUpdatePolicyEnum;
    /**
     * Whether the device reports app states to the EMM. The default value is "deviceReportDisabled".
     */
    deviceReportPolicy?: PolicyDeviceReportPolicyEnum;
    /**
     * Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default.
     */
    productAvailabilityPolicy?: PolicyProductAvailabilityPolicyEnum;
    /**
     * The list of product policies. The productAvailabilityPolicy needs to be set to WHITELIST or ALL for the product policies to be applied.
     */
    productPolicy?: ProductPolicy[];
}
