package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetSummaryDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetSummaryDetailsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}