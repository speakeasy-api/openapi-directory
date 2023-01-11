package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkerRequest {
    public String serverURL;
    public CreateWorkerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateWorkerPathParams pathParams;
    public CreateWorkerRequest withPathParams(CreateWorkerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateWorkerCreateWorkerRequest request;
    public CreateWorkerRequest withRequest(CreateWorkerCreateWorkerRequest request) {
        this.request = request;
        return this;
    }
    public CreateWorkerSecurity security;
    public CreateWorkerRequest withSecurity(CreateWorkerSecurity security) {
        this.security = security;
        return this;
    }
}