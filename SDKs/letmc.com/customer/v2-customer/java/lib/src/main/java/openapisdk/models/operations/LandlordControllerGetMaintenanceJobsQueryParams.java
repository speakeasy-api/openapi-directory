package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetMaintenanceJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetMaintenanceJobsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}