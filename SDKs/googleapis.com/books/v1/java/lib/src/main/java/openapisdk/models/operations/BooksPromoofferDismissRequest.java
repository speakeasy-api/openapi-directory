package openapisdk.models.operations;



public class BooksPromoofferDismissRequest {
    public BooksPromoofferDismissQueryParams queryParams;
    public BooksPromoofferDismissRequest withQueryParams(BooksPromoofferDismissQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksPromoofferDismissSecurity security;
    public BooksPromoofferDismissRequest withSecurity(BooksPromoofferDismissSecurity security) {
        this.security = security;
        return this;
    }
}