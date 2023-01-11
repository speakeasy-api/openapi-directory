package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkerRequest {
    public String serverURL;
    public UpdateWorkerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWorkerPathParams pathParams;
    public UpdateWorkerRequest withPathParams(UpdateWorkerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateWorkerHeaders headers;
    public UpdateWorkerRequest withHeaders(UpdateWorkerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWorkerUpdateWorkerRequest request;
    public UpdateWorkerRequest withRequest(UpdateWorkerUpdateWorkerRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWorkerSecurity security;
    public UpdateWorkerRequest withSecurity(UpdateWorkerSecurity security) {
        this.security = security;
        return this;
    }
}