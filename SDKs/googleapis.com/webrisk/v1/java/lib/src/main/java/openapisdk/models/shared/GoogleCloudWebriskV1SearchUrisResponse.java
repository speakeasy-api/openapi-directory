package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudWebriskV1SearchUrisResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threat")
    public GoogleCloudWebriskV1SearchUrisResponseThreatUri threat;
    public GoogleCloudWebriskV1SearchUrisResponse withThreat(GoogleCloudWebriskV1SearchUrisResponseThreatUri threat) {
        this.threat = threat;
        return this;
    }
}