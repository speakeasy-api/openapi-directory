package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandQueryRequest {
    public String serverURL;
    public UpdateUnderstandQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandQueryPathParams pathParams;
    public UpdateUnderstandQueryRequest withPathParams(UpdateUnderstandQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandQueryUpdateUnderstandQueryRequest request;
    public UpdateUnderstandQueryRequest withRequest(UpdateUnderstandQueryUpdateUnderstandQueryRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandQuerySecurity security;
    public UpdateUnderstandQueryRequest withSecurity(UpdateUnderstandQuerySecurity security) {
        this.security = security;
        return this;
    }
}