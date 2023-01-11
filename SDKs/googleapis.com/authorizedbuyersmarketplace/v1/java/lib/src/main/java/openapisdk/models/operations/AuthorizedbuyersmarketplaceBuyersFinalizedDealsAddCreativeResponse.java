package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FinalizedDeal finalizedDeal;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse withFinalizedDeal(openapisdk.models.shared.FinalizedDeal finalizedDeal) {
        this.finalizedDeal = finalizedDeal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}