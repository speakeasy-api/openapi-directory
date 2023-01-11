package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetTenancyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenancyID")
    public String tenancyID;
    public LandlordControllerGetTenancyQueryParams withTenancyId(String tenancyID) {
        this.tenancyID = tenancyID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetTenancyQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}