/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveTargetedAppsRequest - A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
 */
public class RemoveTargetedAppsRequest {
    /**
     * A list of app IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIds")
    public String[] appIds;

    public RemoveTargetedAppsRequest withAppIds(String[] appIds) {
        this.appIds = appIds;
        return this;
    }
    
    public RemoveTargetedAppsRequest(){}
}
