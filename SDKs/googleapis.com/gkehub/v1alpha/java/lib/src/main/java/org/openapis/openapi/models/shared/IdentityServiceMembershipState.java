/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IdentityServiceMembershipState - **Anthos Identity Service**: State for a single Membership.
 */
public class IdentityServiceMembershipState {
    /**
     * The reason of the failure.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;

    public IdentityServiceMembershipState withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    
    /**
     * Installed AIS version. This is the AIS version installed on this member. The values makes sense iff state is OK.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installedVersion")
    public String installedVersion;

    public IdentityServiceMembershipState withInstalledVersion(String installedVersion) {
        this.installedVersion = installedVersion;
        return this;
    }
    
    /**
     * **Anthos Identity Service**: Configuration for a single Membership.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberConfig")
    public IdentityServiceMembershipSpec memberConfig;

    public IdentityServiceMembershipState withMemberConfig(IdentityServiceMembershipSpec memberConfig) {
        this.memberConfig = memberConfig;
        return this;
    }
    
    /**
     * Deployment state on this member
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public IdentityServiceMembershipStateStateEnum state;

    public IdentityServiceMembershipState withState(IdentityServiceMembershipStateStateEnum state) {
        this.state = state;
        return this;
    }
    
    public IdentityServiceMembershipState(){}
}
