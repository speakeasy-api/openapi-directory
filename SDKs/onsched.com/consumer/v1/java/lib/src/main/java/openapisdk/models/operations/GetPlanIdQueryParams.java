package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlanIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetPlanIdQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}