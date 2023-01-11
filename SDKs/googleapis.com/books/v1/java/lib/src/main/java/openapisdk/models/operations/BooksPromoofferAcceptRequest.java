package openapisdk.models.operations;



public class BooksPromoofferAcceptRequest {
    public BooksPromoofferAcceptQueryParams queryParams;
    public BooksPromoofferAcceptRequest withQueryParams(BooksPromoofferAcceptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksPromoofferAcceptSecurity security;
    public BooksPromoofferAcceptRequest withSecurity(BooksPromoofferAcceptSecurity security) {
        this.security = security;
        return this;
    }
}