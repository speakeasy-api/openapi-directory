package openapisdk.models.operations;



public class RealtimebiddingBiddersBiddingFunctionsArchiveResponse {
    public openapisdk.models.shared.BiddingFunction biddingFunction;
    public RealtimebiddingBiddersBiddingFunctionsArchiveResponse withBiddingFunction(openapisdk.models.shared.BiddingFunction biddingFunction) {
        this.biddingFunction = biddingFunction;
        return this;
    }
    public String contentType;
    public RealtimebiddingBiddersBiddingFunctionsArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersBiddingFunctionsArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}