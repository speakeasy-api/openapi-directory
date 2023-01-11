package openapisdk.models.operations;



public class RealtimebiddingBiddersListResponse {
    public String contentType;
    public RealtimebiddingBiddersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBiddersResponse listBiddersResponse;
    public RealtimebiddingBiddersListResponse withListBiddersResponse(openapisdk.models.shared.ListBiddersResponse listBiddersResponse) {
        this.listBiddersResponse = listBiddersResponse;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}