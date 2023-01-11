package openapisdk.models.operations;



public class BooksBookshelvesGetRequest {
    public BooksBookshelvesGetPathParams pathParams;
    public BooksBookshelvesGetRequest withPathParams(BooksBookshelvesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksBookshelvesGetQueryParams queryParams;
    public BooksBookshelvesGetRequest withQueryParams(BooksBookshelvesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksBookshelvesGetSecurity security;
    public BooksBookshelvesGetRequest withSecurity(BooksBookshelvesGetSecurity security) {
        this.security = security;
        return this;
    }
}