package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesInsertRequest {
    public BloggerPagesInsertPathParams pathParams;
    public BloggerPagesInsertRequest withPathParams(BloggerPagesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPagesInsertQueryParams queryParams;
    public BloggerPagesInsertRequest withQueryParams(BloggerPagesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Page request;
    public BloggerPagesInsertRequest withRequest(openapisdk.models.shared.Page request) {
        this.request = request;
        return this;
    }
    public BloggerPagesInsertSecurity security;
    public BloggerPagesInsertRequest withSecurity(BloggerPagesInsertSecurity security) {
        this.security = security;
        return this;
    }
}