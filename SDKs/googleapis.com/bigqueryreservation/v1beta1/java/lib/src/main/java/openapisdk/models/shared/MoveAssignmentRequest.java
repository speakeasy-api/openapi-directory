package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoveAssignmentRequest
 * The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee.
**/
public class MoveAssignmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationId")
    public String destinationId;
    public MoveAssignmentRequest withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
}