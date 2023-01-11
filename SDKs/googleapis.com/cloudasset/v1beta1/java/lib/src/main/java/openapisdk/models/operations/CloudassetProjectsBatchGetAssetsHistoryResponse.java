package openapisdk.models.operations;



public class CloudassetProjectsBatchGetAssetsHistoryResponse {
    public openapisdk.models.shared.BatchGetAssetsHistoryResponse batchGetAssetsHistoryResponse;
    public CloudassetProjectsBatchGetAssetsHistoryResponse withBatchGetAssetsHistoryResponse(openapisdk.models.shared.BatchGetAssetsHistoryResponse batchGetAssetsHistoryResponse) {
        this.batchGetAssetsHistoryResponse = batchGetAssetsHistoryResponse;
        return this;
    }
    public String contentType;
    public CloudassetProjectsBatchGetAssetsHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudassetProjectsBatchGetAssetsHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}