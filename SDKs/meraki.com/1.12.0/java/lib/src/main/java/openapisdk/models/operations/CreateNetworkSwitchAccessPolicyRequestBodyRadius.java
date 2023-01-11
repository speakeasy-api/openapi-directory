package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkSwitchAccessPolicyRequestBodyRadius
 * Object for RADIUS Settings
**/
public class CreateNetworkSwitchAccessPolicyRequestBodyRadius {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criticalAuth")
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth criticalAuth;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadius withCriticalAuth(CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth criticalAuth) {
        this.criticalAuth = criticalAuth;
        return this;
    }
}