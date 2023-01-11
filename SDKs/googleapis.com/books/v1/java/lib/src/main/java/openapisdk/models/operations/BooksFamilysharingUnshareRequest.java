package openapisdk.models.operations;



public class BooksFamilysharingUnshareRequest {
    public BooksFamilysharingUnshareQueryParams queryParams;
    public BooksFamilysharingUnshareRequest withQueryParams(BooksFamilysharingUnshareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksFamilysharingUnshareSecurity security;
    public BooksFamilysharingUnshareRequest withSecurity(BooksFamilysharingUnshareSecurity security) {
        this.security = security;
        return this;
    }
}