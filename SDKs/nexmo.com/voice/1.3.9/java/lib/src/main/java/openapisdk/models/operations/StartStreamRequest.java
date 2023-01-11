package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartStreamRequest {
    public StartStreamPathParams pathParams;
    public StartStreamRequest withPathParams(StartStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartStreamRequest request;
    public StartStreamRequest withRequest(openapisdk.models.shared.StartStreamRequest request) {
        this.request = request;
        return this;
    }
    public StartStreamSecurity security;
    public StartStreamRequest withSecurity(StartStreamSecurity security) {
        this.security = security;
        return this;
    }
}