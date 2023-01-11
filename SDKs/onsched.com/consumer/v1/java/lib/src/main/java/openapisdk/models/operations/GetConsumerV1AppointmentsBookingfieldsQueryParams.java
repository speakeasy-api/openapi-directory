package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AppointmentsBookingfieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1AppointmentsBookingfieldsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}