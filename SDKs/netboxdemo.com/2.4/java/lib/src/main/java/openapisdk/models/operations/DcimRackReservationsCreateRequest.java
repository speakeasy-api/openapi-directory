package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackReservationsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackReservationInput request;
    public DcimRackReservationsCreateRequest withRequest(openapisdk.models.shared.WritableRackReservationInput request) {
        this.request = request;
        return this;
    }
}