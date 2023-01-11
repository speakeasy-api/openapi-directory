package openapisdk.models.operations;



public class BooksMylibraryBookshelvesListRequest {
    public BooksMylibraryBookshelvesListQueryParams queryParams;
    public BooksMylibraryBookshelvesListRequest withQueryParams(BooksMylibraryBookshelvesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMylibraryBookshelvesListSecurity security;
    public BooksMylibraryBookshelvesListRequest withSecurity(BooksMylibraryBookshelvesListSecurity security) {
        this.security = security;
        return this;
    }
}