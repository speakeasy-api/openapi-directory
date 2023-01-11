package openapisdk.models.operations;



public class BooksCloudloadingDeleteBookRequest {
    public BooksCloudloadingDeleteBookQueryParams queryParams;
    public BooksCloudloadingDeleteBookRequest withQueryParams(BooksCloudloadingDeleteBookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksCloudloadingDeleteBookSecurity security;
    public BooksCloudloadingDeleteBookRequest withSecurity(BooksCloudloadingDeleteBookSecurity security) {
        this.security = security;
        return this;
    }
}