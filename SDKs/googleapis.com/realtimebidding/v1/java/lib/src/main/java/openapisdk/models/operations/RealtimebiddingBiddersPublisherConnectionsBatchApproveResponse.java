package openapisdk.models.operations;



public class RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse {
    public openapisdk.models.shared.BatchApprovePublisherConnectionsResponse batchApprovePublisherConnectionsResponse;
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse withBatchApprovePublisherConnectionsResponse(openapisdk.models.shared.BatchApprovePublisherConnectionsResponse batchApprovePublisherConnectionsResponse) {
        this.batchApprovePublisherConnectionsResponse = batchApprovePublisherConnectionsResponse;
        return this;
    }
    public String contentType;
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}