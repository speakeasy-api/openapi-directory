package openapisdk.models.operations;



public class BooksSeriesMembershipGetRequest {
    public BooksSeriesMembershipGetQueryParams queryParams;
    public BooksSeriesMembershipGetRequest withQueryParams(BooksSeriesMembershipGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksSeriesMembershipGetSecurity security;
    public BooksSeriesMembershipGetRequest withSecurity(BooksSeriesMembershipGetSecurity security) {
        this.security = security;
        return this;
    }
}