package openapisdk.models.operations;



public class BooksPromoofferGetRequest {
    public BooksPromoofferGetQueryParams queryParams;
    public BooksPromoofferGetRequest withQueryParams(BooksPromoofferGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksPromoofferGetSecurity security;
    public BooksPromoofferGetRequest withSecurity(BooksPromoofferGetSecurity security) {
        this.security = security;
        return this;
    }
}