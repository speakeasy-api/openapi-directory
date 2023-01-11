package openapisdk.models.operations;



public class RealtimebiddingBuyersListResponse {
    public String contentType;
    public RealtimebiddingBuyersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBuyersResponse listBuyersResponse;
    public RealtimebiddingBuyersListResponse withListBuyersResponse(openapisdk.models.shared.ListBuyersResponse listBuyersResponse) {
        this.listBuyersResponse = listBuyersResponse;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}