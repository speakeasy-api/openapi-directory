package openapisdk.models.operations;



public class ChineseNameMatchBatchResponse {
    public openapisdk.models.shared.BatchNameMatchedOut batchNameMatchedOut;
    public ChineseNameMatchBatchResponse withBatchNameMatchedOut(openapisdk.models.shared.BatchNameMatchedOut batchNameMatchedOut) {
        this.batchNameMatchedOut = batchNameMatchedOut;
        return this;
    }
    public String contentType;
    public ChineseNameMatchBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChineseNameMatchBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}