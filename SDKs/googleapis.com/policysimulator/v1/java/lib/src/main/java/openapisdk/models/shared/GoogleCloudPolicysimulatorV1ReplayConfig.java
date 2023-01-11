package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1ReplayConfig
 * The configuration used for a Replay.
**/
public class GoogleCloudPolicysimulatorV1ReplayConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logSource")
    public GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum logSource;
    public GoogleCloudPolicysimulatorV1ReplayConfig withLogSource(GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum logSource) {
        this.logSource = logSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyOverlay")
    public java.util.Map<String, GoogleIamV1Policy> policyOverlay;
    public GoogleCloudPolicysimulatorV1ReplayConfig withPolicyOverlay(java.util.Map<String, GoogleIamV1Policy> policyOverlay) {
        this.policyOverlay = policyOverlay;
        return this;
    }
}