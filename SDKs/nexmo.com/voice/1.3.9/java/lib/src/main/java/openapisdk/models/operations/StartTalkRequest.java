package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTalkRequest {
    public StartTalkPathParams pathParams;
    public StartTalkRequest withPathParams(StartTalkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartTalkRequest request;
    public StartTalkRequest withRequest(openapisdk.models.shared.StartTalkRequest request) {
        this.request = request;
        return this;
    }
    public StartTalkSecurity security;
    public StartTalkRequest withSecurity(StartTalkSecurity security) {
        this.security = security;
        return this;
    }
}