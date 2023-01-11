package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetAccountsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}