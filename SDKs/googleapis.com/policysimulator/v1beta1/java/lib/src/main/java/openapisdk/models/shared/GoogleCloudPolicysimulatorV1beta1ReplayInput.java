package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1beta1ReplayInput
 * A resource describing a `Replay`, or simulation.
**/
public class GoogleCloudPolicysimulatorV1beta1ReplayInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GoogleCloudPolicysimulatorV1beta1ReplayConfig config;
    public GoogleCloudPolicysimulatorV1beta1ReplayInput withConfig(GoogleCloudPolicysimulatorV1beta1ReplayConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultsSummary")
    public GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary resultsSummary;
    public GoogleCloudPolicysimulatorV1beta1ReplayInput withResultsSummary(GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary resultsSummary) {
        this.resultsSummary = resultsSummary;
        return this;
    }
}