package openapisdk.models.operations;



public class BooksBookshelvesVolumesListRequest {
    public BooksBookshelvesVolumesListPathParams pathParams;
    public BooksBookshelvesVolumesListRequest withPathParams(BooksBookshelvesVolumesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksBookshelvesVolumesListQueryParams queryParams;
    public BooksBookshelvesVolumesListRequest withQueryParams(BooksBookshelvesVolumesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksBookshelvesVolumesListSecurity security;
    public BooksBookshelvesVolumesListRequest withSecurity(BooksBookshelvesVolumesListSecurity security) {
        this.security = security;
        return this;
    }
}