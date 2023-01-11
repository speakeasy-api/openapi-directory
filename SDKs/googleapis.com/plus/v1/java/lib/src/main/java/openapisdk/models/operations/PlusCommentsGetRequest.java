package openapisdk.models.operations;



public class PlusCommentsGetRequest {
    public PlusCommentsGetPathParams pathParams;
    public PlusCommentsGetRequest withPathParams(PlusCommentsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlusCommentsGetQueryParams queryParams;
    public PlusCommentsGetRequest withQueryParams(PlusCommentsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlusCommentsGetSecurity security;
    public PlusCommentsGetRequest withSecurity(PlusCommentsGetSecurity security) {
        this.security = security;
        return this;
    }
}