package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkerReservationListWorkerReservationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWorkerReservationListWorkerReservationResponseMeta meta;
    public ListWorkerReservationListWorkerReservationResponse withMeta(ListWorkerReservationListWorkerReservationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations")
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation[] reservations;
    public ListWorkerReservationListWorkerReservationResponse withReservations(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation[] reservations) {
        this.reservations = reservations;
        return this;
    }
}