package openapisdk.models.operations;



public class BooksFamilysharingShareRequest {
    public BooksFamilysharingShareQueryParams queryParams;
    public BooksFamilysharingShareRequest withQueryParams(BooksFamilysharingShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksFamilysharingShareSecurity security;
    public BooksFamilysharingShareRequest withSecurity(BooksFamilysharingShareSecurity security) {
        this.security = security;
        return this;
    }
}