package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesUpdateRequest {
    public BloggerPagesUpdatePathParams pathParams;
    public BloggerPagesUpdateRequest withPathParams(BloggerPagesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPagesUpdateQueryParams queryParams;
    public BloggerPagesUpdateRequest withQueryParams(BloggerPagesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Page request;
    public BloggerPagesUpdateRequest withRequest(openapisdk.models.shared.Page request) {
        this.request = request;
        return this;
    }
    public BloggerPagesUpdateSecurity security;
    public BloggerPagesUpdateRequest withSecurity(BloggerPagesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}