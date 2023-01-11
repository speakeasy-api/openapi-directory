package openapisdk.models.operations;



public class BooksSeriesGetRequest {
    public BooksSeriesGetQueryParams queryParams;
    public BooksSeriesGetRequest withQueryParams(BooksSeriesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksSeriesGetSecurity security;
    public BooksSeriesGetRequest withSecurity(BooksSeriesGetSecurity security) {
        this.security = security;
        return this;
    }
}