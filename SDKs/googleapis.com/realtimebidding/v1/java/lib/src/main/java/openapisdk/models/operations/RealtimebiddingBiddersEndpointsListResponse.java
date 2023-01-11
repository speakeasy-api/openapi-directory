package openapisdk.models.operations;



public class RealtimebiddingBiddersEndpointsListResponse {
    public String contentType;
    public RealtimebiddingBiddersEndpointsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEndpointsResponse listEndpointsResponse;
    public RealtimebiddingBiddersEndpointsListResponse withListEndpointsResponse(openapisdk.models.shared.ListEndpointsResponse listEndpointsResponse) {
        this.listEndpointsResponse = listEndpointsResponse;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersEndpointsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}