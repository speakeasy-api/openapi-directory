package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FinalizedDeal finalizedDeal;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse withFinalizedDeal(openapisdk.models.shared.FinalizedDeal finalizedDeal) {
        this.finalizedDeal = finalizedDeal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}