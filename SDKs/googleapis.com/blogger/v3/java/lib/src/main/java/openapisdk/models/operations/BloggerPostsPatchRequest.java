package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsPatchRequest {
    public BloggerPostsPatchPathParams pathParams;
    public BloggerPostsPatchRequest withPathParams(BloggerPostsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPostsPatchQueryParams queryParams;
    public BloggerPostsPatchRequest withQueryParams(BloggerPostsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post request;
    public BloggerPostsPatchRequest withRequest(openapisdk.models.shared.Post request) {
        this.request = request;
        return this;
    }
    public BloggerPostsPatchSecurity security;
    public BloggerPostsPatchRequest withSecurity(BloggerPostsPatchSecurity security) {
        this.security = security;
        return this;
    }
}