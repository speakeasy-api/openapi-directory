/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Policy - The device policy for a given managed device.
 */
public class Policy {
    /**
     * Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency. When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect. "choiceToTheUser" allows the device's user to configure the app update policy. "always" enables auto updates. "never" disables auto updates. "wifiOnly" enables auto updates only when the device is connected to wifi.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoUpdatePolicy")
    public PolicyAutoUpdatePolicyEnum autoUpdatePolicy;

    public Policy withAutoUpdatePolicy(PolicyAutoUpdatePolicyEnum autoUpdatePolicy) {
        this.autoUpdatePolicy = autoUpdatePolicy;
        return this;
    }
    
    /**
     * Whether the device reports app states to the EMM. The default value is "deviceReportDisabled".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceReportPolicy")
    public PolicyDeviceReportPolicyEnum deviceReportPolicy;

    public Policy withDeviceReportPolicy(PolicyDeviceReportPolicyEnum deviceReportPolicy) {
        this.deviceReportPolicy = deviceReportPolicy;
        return this;
    }
    
    /**
     * Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceWindow")
    public MaintenanceWindow maintenanceWindow;

    public Policy withMaintenanceWindow(MaintenanceWindow maintenanceWindow) {
        this.maintenanceWindow = maintenanceWindow;
        return this;
    }
    
    /**
     * The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productAvailabilityPolicy")
    public PolicyProductAvailabilityPolicyEnum productAvailabilityPolicy;

    public Policy withProductAvailabilityPolicy(PolicyProductAvailabilityPolicyEnum productAvailabilityPolicy) {
        this.productAvailabilityPolicy = productAvailabilityPolicy;
        return this;
    }
    
    /**
     * The list of product policies. The productAvailabilityPolicy needs to be set to WHITELIST or ALL for the product policies to be applied.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productPolicy")
    public ProductPolicy[] productPolicy;

    public Policy withProductPolicy(ProductPolicy[] productPolicy) {
        this.productPolicy = productPolicy;
        return this;
    }
    
    public Policy(){}
}
