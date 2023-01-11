package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsInsertRequest {
    public BloggerPostsInsertPathParams pathParams;
    public BloggerPostsInsertRequest withPathParams(BloggerPostsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsInsertQueryParams queryParams;
    public BloggerPostsInsertRequest withQueryParams(BloggerPostsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post request;
    public BloggerPostsInsertRequest withRequest(openapisdk.models.shared.Post request) {
        this.request = request;
        return this;
    }
    public BloggerPostsInsertSecurity security;
    public BloggerPostsInsertRequest withSecurity(BloggerPostsInsertSecurity security) {
        this.security = security;
        return this;
    }
}