package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetLandlordCrmEntriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetLandlordCrmEntriesQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}