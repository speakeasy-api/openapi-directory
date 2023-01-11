package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CostScenario
 * Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
**/
public class CostScenario {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitments")
    public Commitment[] commitments;
    public CostScenario withCommitments(Commitment[] commitments) {
        this.commitments = commitments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarioConfig")
    public ScenarioConfig scenarioConfig;
    public CostScenario withScenarioConfig(ScenarioConfig scenarioConfig) {
        this.scenarioConfig = scenarioConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloads")
    public Workload[] workloads;
    public CostScenario withWorkloads(Workload[] workloads) {
        this.workloads = workloads;
        return this;
    }
}