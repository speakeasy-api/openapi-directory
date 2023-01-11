package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportCasesCommentsCreateRequest {
    public CloudsupportCasesCommentsCreatePathParams pathParams;
    public CloudsupportCasesCommentsCreateRequest withPathParams(CloudsupportCasesCommentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudsupportCasesCommentsCreateQueryParams queryParams;
    public CloudsupportCasesCommentsCreateRequest withQueryParams(CloudsupportCasesCommentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CommentInput request;
    public CloudsupportCasesCommentsCreateRequest withRequest(openapisdk.models.shared.CommentInput request) {
        this.request = request;
        return this;
    }
    public CloudsupportCasesCommentsCreateSecurity security;
    public CloudsupportCasesCommentsCreateRequest withSecurity(CloudsupportCasesCommentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}