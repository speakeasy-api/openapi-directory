package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MergeCapacityCommitmentsRequest
 * The request for ReservationService.MergeCapacityCommitments.
**/
public class MergeCapacityCommitmentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityCommitmentIds")
    public String[] capacityCommitmentIds;
    public MergeCapacityCommitmentsRequest withCapacityCommitmentIds(String[] capacityCommitmentIds) {
        this.capacityCommitmentIds = capacityCommitmentIds;
        return this;
    }
}