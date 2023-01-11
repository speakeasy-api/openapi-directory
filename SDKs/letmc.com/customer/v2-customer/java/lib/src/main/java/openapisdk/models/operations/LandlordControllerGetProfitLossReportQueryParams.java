package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetProfitLossReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetProfitLossReportQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}