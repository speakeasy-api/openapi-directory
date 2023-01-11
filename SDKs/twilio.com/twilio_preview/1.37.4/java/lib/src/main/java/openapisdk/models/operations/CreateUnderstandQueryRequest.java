package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandQueryRequest {
    public String serverURL;
    public CreateUnderstandQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUnderstandQueryPathParams pathParams;
    public CreateUnderstandQueryRequest withPathParams(CreateUnderstandQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUnderstandQueryCreateUnderstandQueryRequest request;
    public CreateUnderstandQueryRequest withRequest(CreateUnderstandQueryCreateUnderstandQueryRequest request) {
        this.request = request;
        return this;
    }
    public CreateUnderstandQuerySecurity security;
    public CreateUnderstandQueryRequest withSecurity(CreateUnderstandQuerySecurity security) {
        this.security = security;
        return this;
    }
}