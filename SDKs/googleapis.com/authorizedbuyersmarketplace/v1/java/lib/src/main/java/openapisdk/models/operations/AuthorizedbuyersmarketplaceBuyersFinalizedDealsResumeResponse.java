package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FinalizedDeal finalizedDeal;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse withFinalizedDeal(openapisdk.models.shared.FinalizedDeal finalizedDeal) {
        this.finalizedDeal = finalizedDeal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}