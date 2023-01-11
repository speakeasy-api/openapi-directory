package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackReservationsPartialUpdateRequest {
    public DcimRackReservationsPartialUpdatePathParams pathParams;
    public DcimRackReservationsPartialUpdateRequest withPathParams(DcimRackReservationsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackReservationInput request;
    public DcimRackReservationsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableRackReservationInput request) {
        this.request = request;
        return this;
    }
}