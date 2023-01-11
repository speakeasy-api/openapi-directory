package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SplitCapacityCommitmentRequest
 * The request for ReservationService.SplitCapacityCommitment.
**/
public class SplitCapacityCommitmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotCount")
    public String slotCount;
    public SplitCapacityCommitmentRequest withSlotCount(String slotCount) {
        this.slotCount = slotCount;
        return this;
    }
}