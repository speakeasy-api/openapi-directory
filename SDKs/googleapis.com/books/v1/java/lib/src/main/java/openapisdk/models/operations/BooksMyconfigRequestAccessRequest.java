package openapisdk.models.operations;



public class BooksMyconfigRequestAccessRequest {
    public BooksMyconfigRequestAccessQueryParams queryParams;
    public BooksMyconfigRequestAccessRequest withQueryParams(BooksMyconfigRequestAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMyconfigRequestAccessSecurity security;
    public BooksMyconfigRequestAccessRequest withSecurity(BooksMyconfigRequestAccessSecurity security) {
        this.security = security;
        return this;
    }
}