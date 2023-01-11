package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchAccessPolicyRequestBodyRadius
 * Object for RADIUS Settings
**/
public class UpdateNetworkSwitchAccessPolicyRequestBodyRadius {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criticalAuth")
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth criticalAuth;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadius withCriticalAuth(UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth criticalAuth) {
        this.criticalAuth = criticalAuth;
        return this;
    }
}