/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourcePolicyVmMaintenancePolicyMaintenanceWindow - A maintenance window for VMs. When set, we restrict our maintenance operations to this window.
 */
public class ResourcePolicyVmMaintenancePolicyMaintenanceWindow {
    /**
     * Time window specified for daily operations.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyMaintenanceWindow")
    public ResourcePolicyDailyCycle dailyMaintenanceWindow;

    public ResourcePolicyVmMaintenancePolicyMaintenanceWindow withDailyMaintenanceWindow(ResourcePolicyDailyCycle dailyMaintenanceWindow) {
        this.dailyMaintenanceWindow = dailyMaintenanceWindow;
        return this;
    }
    
    public ResourcePolicyVmMaintenancePolicyMaintenanceWindow(){}
}
