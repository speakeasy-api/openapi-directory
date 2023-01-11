package openapisdk.models.operations;



public class RealtimebiddingBiddersBiddingFunctionsCreateResponse {
    public openapisdk.models.shared.BiddingFunction biddingFunction;
    public RealtimebiddingBiddersBiddingFunctionsCreateResponse withBiddingFunction(openapisdk.models.shared.BiddingFunction biddingFunction) {
        this.biddingFunction = biddingFunction;
        return this;
    }
    public String contentType;
    public RealtimebiddingBiddersBiddingFunctionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersBiddingFunctionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}