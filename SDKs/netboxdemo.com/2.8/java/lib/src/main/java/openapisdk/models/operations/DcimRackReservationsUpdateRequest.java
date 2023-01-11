package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackReservationsUpdateRequest {
    public DcimRackReservationsUpdatePathParams pathParams;
    public DcimRackReservationsUpdateRequest withPathParams(DcimRackReservationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackReservationInput request;
    public DcimRackReservationsUpdateRequest withRequest(openapisdk.models.shared.WritableRackReservationInput request) {
        this.request = request;
        return this;
    }
}