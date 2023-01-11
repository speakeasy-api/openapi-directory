package openapisdk.models.operations;



public class ContentAccountstatusesListRequest {
    public ContentAccountstatusesListPathParams pathParams;
    public ContentAccountstatusesListRequest withPathParams(ContentAccountstatusesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccountstatusesListQueryParams queryParams;
    public ContentAccountstatusesListRequest withQueryParams(ContentAccountstatusesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContentAccountstatusesListSecurity security;
    public ContentAccountstatusesListRequest withSecurity(ContentAccountstatusesListSecurity security) {
        this.security = security;
        return this;
    }
}