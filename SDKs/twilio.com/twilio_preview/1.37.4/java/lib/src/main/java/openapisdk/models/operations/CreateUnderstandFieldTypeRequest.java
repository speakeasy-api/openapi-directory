package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandFieldTypeRequest {
    public String serverURL;
    public CreateUnderstandFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUnderstandFieldTypePathParams pathParams;
    public CreateUnderstandFieldTypeRequest withPathParams(CreateUnderstandFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest request;
    public CreateUnderstandFieldTypeRequest withRequest(CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest request) {
        this.request = request;
        return this;
    }
    public CreateUnderstandFieldTypeSecurity security;
    public CreateUnderstandFieldTypeRequest withSecurity(CreateUnderstandFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}