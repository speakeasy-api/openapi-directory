package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckInResponse
 * The response to the CheckIn method.
**/
public class CheckInResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadline")
    public String deadline;
    public CheckInResponse withDeadline(String deadline) {
        this.deadline = deadline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public java.util.Map<String, Object> features;
    public CheckInResponse withFeatures(java.util.Map<String, Object> features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public CheckInResponse withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
}