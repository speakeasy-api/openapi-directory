package openapisdk.models.operations;



public class BooksLayersGetRequest {
    public BooksLayersGetPathParams pathParams;
    public BooksLayersGetRequest withPathParams(BooksLayersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksLayersGetQueryParams queryParams;
    public BooksLayersGetRequest withQueryParams(BooksLayersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksLayersGetSecurity security;
    public BooksLayersGetRequest withSecurity(BooksLayersGetSecurity security) {
        this.security = security;
        return this;
    }
}