package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MergedResult
 * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
**/
public class MergedResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcome")
    public Outcome outcome;
    public MergedResult withOutcome(Outcome outcome) {
        this.outcome = outcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MergedResultStateEnum state;
    public MergedResult withState(MergedResultStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testSuiteOverviews")
    public TestSuiteOverview[] testSuiteOverviews;
    public MergedResult withTestSuiteOverviews(TestSuiteOverview[] testSuiteOverviews) {
        this.testSuiteOverviews = testSuiteOverviews;
        return this;
    }
}