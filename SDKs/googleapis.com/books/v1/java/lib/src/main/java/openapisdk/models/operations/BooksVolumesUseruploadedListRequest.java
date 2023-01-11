package openapisdk.models.operations;



public class BooksVolumesUseruploadedListRequest {
    public BooksVolumesUseruploadedListQueryParams queryParams;
    public BooksVolumesUseruploadedListRequest withQueryParams(BooksVolumesUseruploadedListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksVolumesUseruploadedListSecurity security;
    public BooksVolumesUseruploadedListRequest withSecurity(BooksVolumesUseruploadedListSecurity security) {
        this.security = security;
        return this;
    }
}