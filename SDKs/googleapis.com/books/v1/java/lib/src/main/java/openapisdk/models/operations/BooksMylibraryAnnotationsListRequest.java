package openapisdk.models.operations;



public class BooksMylibraryAnnotationsListRequest {
    public BooksMylibraryAnnotationsListQueryParams queryParams;
    public BooksMylibraryAnnotationsListRequest withQueryParams(BooksMylibraryAnnotationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMylibraryAnnotationsListSecurity security;
    public BooksMylibraryAnnotationsListRequest withSecurity(BooksMylibraryAnnotationsListSecurity security) {
        this.security = security;
        return this;
    }
}