package openapisdk.models.operations;



public class BooksMylibraryBookshelvesVolumesListRequest {
    public BooksMylibraryBookshelvesVolumesListPathParams pathParams;
    public BooksMylibraryBookshelvesVolumesListRequest withPathParams(BooksMylibraryBookshelvesVolumesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksMylibraryBookshelvesVolumesListQueryParams queryParams;
    public BooksMylibraryBookshelvesVolumesListRequest withQueryParams(BooksMylibraryBookshelvesVolumesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMylibraryBookshelvesVolumesListSecurity security;
    public BooksMylibraryBookshelvesVolumesListRequest withSecurity(BooksMylibraryBookshelvesVolumesListSecurity security) {
        this.security = security;
        return this;
    }
}