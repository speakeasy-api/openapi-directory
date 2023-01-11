package openapisdk.models.operations;



public class ContentDatafeedsFetchnowRequest {
    public ContentDatafeedsFetchnowPathParams pathParams;
    public ContentDatafeedsFetchnowRequest withPathParams(ContentDatafeedsFetchnowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentDatafeedsFetchnowQueryParams queryParams;
    public ContentDatafeedsFetchnowRequest withQueryParams(ContentDatafeedsFetchnowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentDatafeedsFetchnowSecurity security;
    public ContentDatafeedsFetchnowRequest withSecurity(ContentDatafeedsFetchnowSecurity security) {
        this.security = security;
        return this;
    }
}