package openapisdk.models.operations;



public class ContentPosGetRequest {
    public ContentPosGetPathParams pathParams;
    public ContentPosGetRequest withPathParams(ContentPosGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentPosGetQueryParams queryParams;
    public ContentPosGetRequest withQueryParams(ContentPosGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentPosGetSecurity security;
    public ContentPosGetRequest withSecurity(ContentPosGetSecurity security) {
        this.security = security;
        return this;
    }
}