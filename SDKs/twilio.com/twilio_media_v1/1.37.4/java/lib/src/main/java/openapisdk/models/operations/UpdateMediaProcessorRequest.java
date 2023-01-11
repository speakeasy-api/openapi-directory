package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMediaProcessorRequest {
    public String serverURL;
    public UpdateMediaProcessorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateMediaProcessorPathParams pathParams;
    public UpdateMediaProcessorRequest withPathParams(UpdateMediaProcessorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateMediaProcessorUpdateMediaProcessorRequest request;
    public UpdateMediaProcessorRequest withRequest(UpdateMediaProcessorUpdateMediaProcessorRequest request) {
        this.request = request;
        return this;
    }
    public UpdateMediaProcessorSecurity security;
    public UpdateMediaProcessorRequest withSecurity(UpdateMediaProcessorSecurity security) {
        this.security = security;
        return this;
    }
}