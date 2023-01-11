package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesPatchRequest {
    public BloggerPagesPatchPathParams pathParams;
    public BloggerPagesPatchRequest withPathParams(BloggerPagesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BloggerPagesPatchQueryParams queryParams;
    public BloggerPagesPatchRequest withQueryParams(BloggerPagesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Page request;
    public BloggerPagesPatchRequest withRequest(openapisdk.models.shared.Page request) {
        this.request = request;
        return this;
    }
    public BloggerPagesPatchSecurity security;
    public BloggerPagesPatchRequest withSecurity(BloggerPagesPatchSecurity security) {
        this.security = security;
        return this;
    }
}