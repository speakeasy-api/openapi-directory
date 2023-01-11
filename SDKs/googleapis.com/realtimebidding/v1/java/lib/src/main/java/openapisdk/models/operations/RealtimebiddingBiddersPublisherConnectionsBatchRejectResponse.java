package openapisdk.models.operations;



public class RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse {
    public openapisdk.models.shared.BatchRejectPublisherConnectionsResponse batchRejectPublisherConnectionsResponse;
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse withBatchRejectPublisherConnectionsResponse(openapisdk.models.shared.BatchRejectPublisherConnectionsResponse batchRejectPublisherConnectionsResponse) {
        this.batchRejectPublisherConnectionsResponse = batchRejectPublisherConnectionsResponse;
        return this;
    }
    public String contentType;
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}