package openapisdk.models.operations;



public class BooksNotificationGetRequest {
    public BooksNotificationGetQueryParams queryParams;
    public BooksNotificationGetRequest withQueryParams(BooksNotificationGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksNotificationGetSecurity security;
    public BooksNotificationGetRequest withSecurity(BooksNotificationGetSecurity security) {
        this.security = security;
        return this;
    }
}