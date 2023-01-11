package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetDocumentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ID")
    public String id;
    public LandlordControllerGetDocumentQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerGetDocumentQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}