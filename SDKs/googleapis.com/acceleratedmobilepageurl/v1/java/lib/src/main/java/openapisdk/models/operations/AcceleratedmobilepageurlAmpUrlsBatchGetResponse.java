package openapisdk.models.operations;



public class AcceleratedmobilepageurlAmpUrlsBatchGetResponse {
    public openapisdk.models.shared.BatchGetAmpUrlsResponse batchGetAmpUrlsResponse;
    public AcceleratedmobilepageurlAmpUrlsBatchGetResponse withBatchGetAmpUrlsResponse(openapisdk.models.shared.BatchGetAmpUrlsResponse batchGetAmpUrlsResponse) {
        this.batchGetAmpUrlsResponse = batchGetAmpUrlsResponse;
        return this;
    }
    public String contentType;
    public AcceleratedmobilepageurlAmpUrlsBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AcceleratedmobilepageurlAmpUrlsBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}