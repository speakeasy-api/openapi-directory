package openapisdk.models.operations;



public class RealtimebiddingBiddersBiddingFunctionsActivateResponse {
    public openapisdk.models.shared.BiddingFunction biddingFunction;
    public RealtimebiddingBiddersBiddingFunctionsActivateResponse withBiddingFunction(openapisdk.models.shared.BiddingFunction biddingFunction) {
        this.biddingFunction = biddingFunction;
        return this;
    }
    public String contentType;
    public RealtimebiddingBiddersBiddingFunctionsActivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersBiddingFunctionsActivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}