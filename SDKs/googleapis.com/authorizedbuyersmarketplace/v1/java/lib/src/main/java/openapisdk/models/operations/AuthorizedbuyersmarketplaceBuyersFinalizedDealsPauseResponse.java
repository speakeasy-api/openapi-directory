package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FinalizedDeal finalizedDeal;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse withFinalizedDeal(openapisdk.models.shared.FinalizedDeal finalizedDeal) {
        this.finalizedDeal = finalizedDeal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}