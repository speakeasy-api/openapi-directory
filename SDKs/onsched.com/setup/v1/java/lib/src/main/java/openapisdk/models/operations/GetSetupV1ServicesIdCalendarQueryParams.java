package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ServicesIdCalendarQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetSetupV1ServicesIdCalendarQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}