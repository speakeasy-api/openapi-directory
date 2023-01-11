package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskReservationListTaskReservationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTaskReservationListTaskReservationResponseMeta meta;
    public ListTaskReservationListTaskReservationResponse withMeta(ListTaskReservationListTaskReservationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations")
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation[] reservations;
    public ListTaskReservationListTaskReservationResponse withReservations(openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation[] reservations) {
        this.reservations = reservations;
        return this;
    }
}