package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetInvetoryReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenancyID")
    public String tenancyID;
    public LandlordControllerGetInvetoryReportQueryParams withTenancyId(String tenancyID) {
        this.tenancyID = tenancyID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetInvetoryReportQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}