package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandFieldRequest {
    public String serverURL;
    public CreateUnderstandFieldRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUnderstandFieldPathParams pathParams;
    public CreateUnderstandFieldRequest withPathParams(CreateUnderstandFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUnderstandFieldCreateUnderstandFieldRequest request;
    public CreateUnderstandFieldRequest withRequest(CreateUnderstandFieldCreateUnderstandFieldRequest request) {
        this.request = request;
        return this;
    }
    public CreateUnderstandFieldSecurity security;
    public CreateUnderstandFieldRequest withSecurity(CreateUnderstandFieldSecurity security) {
        this.security = security;
        return this;
    }
}