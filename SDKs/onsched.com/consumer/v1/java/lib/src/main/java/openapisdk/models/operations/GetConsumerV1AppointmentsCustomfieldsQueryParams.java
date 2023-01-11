package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AppointmentsCustomfieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1AppointmentsCustomfieldsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}