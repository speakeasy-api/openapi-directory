package openapisdk.models.operations;



public class BooksCloudloadingAddBookRequest {
    public BooksCloudloadingAddBookQueryParams queryParams;
    public BooksCloudloadingAddBookRequest withQueryParams(BooksCloudloadingAddBookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksCloudloadingAddBookSecurity security;
    public BooksCloudloadingAddBookRequest withSecurity(BooksCloudloadingAddBookSecurity security) {
        this.security = security;
        return this;
    }
}