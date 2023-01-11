package openapisdk.models.operations;



public class RealtimebiddingBiddersBiddingFunctionsListResponse {
    public String contentType;
    public RealtimebiddingBiddersBiddingFunctionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBiddingFunctionsResponse listBiddingFunctionsResponse;
    public RealtimebiddingBiddersBiddingFunctionsListResponse withListBiddingFunctionsResponse(openapisdk.models.shared.ListBiddingFunctionsResponse listBiddingFunctionsResponse) {
        this.listBiddingFunctionsResponse = listBiddingFunctionsResponse;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersBiddingFunctionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}