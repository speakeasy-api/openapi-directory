package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCapacityCommitmentsResponse
 * The response for ReservationService.ListCapacityCommitments.
**/
public class ListCapacityCommitmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityCommitments")
    public CapacityCommitment[] capacityCommitments;
    public ListCapacityCommitmentsResponse withCapacityCommitments(CapacityCommitment[] capacityCommitments) {
        this.capacityCommitments = capacityCommitments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCapacityCommitmentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}