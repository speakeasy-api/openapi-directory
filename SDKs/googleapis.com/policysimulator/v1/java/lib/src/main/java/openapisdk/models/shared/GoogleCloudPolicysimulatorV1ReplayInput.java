package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1ReplayInput
 * A resource describing a `Replay`, or simulation.
**/
public class GoogleCloudPolicysimulatorV1ReplayInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GoogleCloudPolicysimulatorV1ReplayConfig config;
    public GoogleCloudPolicysimulatorV1ReplayInput withConfig(GoogleCloudPolicysimulatorV1ReplayConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultsSummary")
    public GoogleCloudPolicysimulatorV1ReplayResultsSummary resultsSummary;
    public GoogleCloudPolicysimulatorV1ReplayInput withResultsSummary(GoogleCloudPolicysimulatorV1ReplayResultsSummary resultsSummary) {
        this.resultsSummary = resultsSummary;
        return this;
    }
}