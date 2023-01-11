package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInstanceHealthResponse
 * Response for checking if a notebook instance is healthy.
**/
public class GetInstanceHealthResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthInfo")
    public java.util.Map<String, String> healthInfo;
    public GetInstanceHealthResponse withHealthInfo(java.util.Map<String, String> healthInfo) {
        this.healthInfo = healthInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthState")
    public GetInstanceHealthResponseHealthStateEnum healthState;
    public GetInstanceHealthResponse withHealthState(GetInstanceHealthResponseHealthStateEnum healthState) {
        this.healthState = healthState;
        return this;
    }
}