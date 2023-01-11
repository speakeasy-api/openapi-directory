package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldTypeRequest {
    public String serverURL;
    public CreateFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateFieldTypePathParams pathParams;
    public CreateFieldTypeRequest withPathParams(CreateFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateFieldTypeCreateFieldTypeRequest request;
    public CreateFieldTypeRequest withRequest(CreateFieldTypeCreateFieldTypeRequest request) {
        this.request = request;
        return this;
    }
    public CreateFieldTypeSecurity security;
    public CreateFieldTypeRequest withSecurity(CreateFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}