package openapisdk.models.operations;



public class BooksVolumesListRequest {
    public BooksVolumesListQueryParams queryParams;
    public BooksVolumesListRequest withQueryParams(BooksVolumesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksVolumesListSecurity security;
    public BooksVolumesListRequest withSecurity(BooksVolumesListSecurity security) {
        this.security = security;
        return this;
    }
}