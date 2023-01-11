package openapisdk.models.operations;



public class RealtimebiddingBiddersPublisherConnectionsListResponse {
    public String contentType;
    public RealtimebiddingBiddersPublisherConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPublisherConnectionsResponse listPublisherConnectionsResponse;
    public RealtimebiddingBiddersPublisherConnectionsListResponse withListPublisherConnectionsResponse(openapisdk.models.shared.ListPublisherConnectionsResponse listPublisherConnectionsResponse) {
        this.listPublisherConnectionsResponse = listPublisherConnectionsResponse;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersPublisherConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}