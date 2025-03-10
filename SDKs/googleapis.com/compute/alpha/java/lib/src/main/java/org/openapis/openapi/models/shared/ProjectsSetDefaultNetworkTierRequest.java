/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectsSetDefaultNetworkTierRequest {
    /**
     * Default network tier to be set.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTier")
    public ProjectsSetDefaultNetworkTierRequestNetworkTierEnum networkTier;

    public ProjectsSetDefaultNetworkTierRequest withNetworkTier(ProjectsSetDefaultNetworkTierRequestNetworkTierEnum networkTier) {
        this.networkTier = networkTier;
        return this;
    }
    
    public ProjectsSetDefaultNetworkTierRequest(){}
}
