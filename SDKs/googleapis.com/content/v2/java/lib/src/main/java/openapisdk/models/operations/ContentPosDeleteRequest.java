package openapisdk.models.operations;



public class ContentPosDeleteRequest {
    public ContentPosDeletePathParams pathParams;
    public ContentPosDeleteRequest withPathParams(ContentPosDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentPosDeleteQueryParams queryParams;
    public ContentPosDeleteRequest withQueryParams(ContentPosDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentPosDeleteSecurity security;
    public ContentPosDeleteRequest withSecurity(ContentPosDeleteSecurity security) {
        this.security = security;
        return this;
    }
}