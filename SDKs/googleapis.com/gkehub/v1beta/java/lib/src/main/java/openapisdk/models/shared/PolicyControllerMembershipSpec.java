package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyControllerMembershipSpec
 * **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
**/
public class PolicyControllerMembershipSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyControllerHubConfig")
    public PolicyControllerHubConfig policyControllerHubConfig;
    public PolicyControllerMembershipSpec withPolicyControllerHubConfig(PolicyControllerHubConfig policyControllerHubConfig) {
        this.policyControllerHubConfig = policyControllerHubConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public PolicyControllerMembershipSpec withVersion(String version) {
        this.version = version;
        return this;
    }
}