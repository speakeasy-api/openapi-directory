package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse
 * Response message for Simulator.ListReplayResults.
**/
public class GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replayResults")
    public GoogleCloudPolicysimulatorV1beta1ReplayResult[] replayResults;
    public GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse withReplayResults(GoogleCloudPolicysimulatorV1beta1ReplayResult[] replayResults) {
        this.replayResults = replayResults;
        return this;
    }
}