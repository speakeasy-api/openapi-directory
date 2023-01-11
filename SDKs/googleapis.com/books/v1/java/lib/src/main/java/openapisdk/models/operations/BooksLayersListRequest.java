package openapisdk.models.operations;



public class BooksLayersListRequest {
    public BooksLayersListPathParams pathParams;
    public BooksLayersListRequest withPathParams(BooksLayersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksLayersListQueryParams queryParams;
    public BooksLayersListRequest withQueryParams(BooksLayersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksLayersListSecurity security;
    public BooksLayersListRequest withSecurity(BooksLayersListSecurity security) {
        this.security = security;
        return this;
    }
}