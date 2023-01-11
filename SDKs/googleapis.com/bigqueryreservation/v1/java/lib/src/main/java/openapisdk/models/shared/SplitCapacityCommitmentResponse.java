package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SplitCapacityCommitmentResponse
 * The response for ReservationService.SplitCapacityCommitment.
**/
public class SplitCapacityCommitmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public CapacityCommitment first;
    public SplitCapacityCommitmentResponse withFirst(CapacityCommitment first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("second")
    public CapacityCommitment second;
    public SplitCapacityCommitmentResponse withSecond(CapacityCommitment second) {
        this.second = second;
        return this;
    }
}