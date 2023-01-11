package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetTenancyAgreementReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenancyID")
    public String tenancyID;
    public LandlordControllerGetTenancyAgreementReportQueryParams withTenancyId(String tenancyID) {
        this.tenancyID = tenancyID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetTenancyAgreementReportQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}