package openapisdk.models.operations;



public class BooksBookshelvesListRequest {
    public BooksBookshelvesListPathParams pathParams;
    public BooksBookshelvesListRequest withPathParams(BooksBookshelvesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksBookshelvesListQueryParams queryParams;
    public BooksBookshelvesListRequest withQueryParams(BooksBookshelvesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksBookshelvesListSecurity security;
    public BooksBookshelvesListRequest withSecurity(BooksBookshelvesListSecurity security) {
        this.security = security;
        return this;
    }
}