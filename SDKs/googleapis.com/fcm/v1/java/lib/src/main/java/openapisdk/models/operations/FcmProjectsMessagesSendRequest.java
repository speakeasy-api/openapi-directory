package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FcmProjectsMessagesSendRequest {
    public FcmProjectsMessagesSendPathParams pathParams;
    public FcmProjectsMessagesSendRequest withPathParams(FcmProjectsMessagesSendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FcmProjectsMessagesSendQueryParams queryParams;
    public FcmProjectsMessagesSendRequest withQueryParams(FcmProjectsMessagesSendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendMessageRequest request;
    public FcmProjectsMessagesSendRequest withRequest(openapisdk.models.shared.SendMessageRequest request) {
        this.request = request;
        return this;
    }
    public FcmProjectsMessagesSendSecurity security;
    public FcmProjectsMessagesSendRequest withSecurity(FcmProjectsMessagesSendSecurity security) {
        this.security = security;
        return this;
    }
}