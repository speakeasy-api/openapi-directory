package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceMembershipState
 * **Anthos Identity Service**: State for a single Membership.
**/
public class IdentityServiceMembershipState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public IdentityServiceMembershipState withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installedVersion")
    public String installedVersion;
    public IdentityServiceMembershipState withInstalledVersion(String installedVersion) {
        this.installedVersion = installedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberConfig")
    public IdentityServiceMembershipSpec memberConfig;
    public IdentityServiceMembershipState withMemberConfig(IdentityServiceMembershipSpec memberConfig) {
        this.memberConfig = memberConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public IdentityServiceMembershipStateStateEnum state;
    public IdentityServiceMembershipState withState(IdentityServiceMembershipStateStateEnum state) {
        this.state = state;
        return this;
    }
}