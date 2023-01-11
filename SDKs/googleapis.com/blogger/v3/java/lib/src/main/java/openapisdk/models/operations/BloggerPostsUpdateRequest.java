package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsUpdateRequest {
    public BloggerPostsUpdatePathParams pathParams;
    public BloggerPostsUpdateRequest withPathParams(BloggerPostsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsUpdateQueryParams queryParams;
    public BloggerPostsUpdateRequest withQueryParams(BloggerPostsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post request;
    public BloggerPostsUpdateRequest withRequest(openapisdk.models.shared.Post request) {
        this.request = request;
        return this;
    }
    public BloggerPostsUpdateSecurity security;
    public BloggerPostsUpdateRequest withSecurity(BloggerPostsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}