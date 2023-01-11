package openapisdk.models.operations;



public class BooksPromoofferGetResponse {
    public String contentType;
    public BooksPromoofferGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Offers offers;
    public BooksPromoofferGetResponse withOffers(openapisdk.models.shared.Offers offers) {
        this.offers = offers;
        return this;
    }
    public Long statusCode;
    public BooksPromoofferGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}