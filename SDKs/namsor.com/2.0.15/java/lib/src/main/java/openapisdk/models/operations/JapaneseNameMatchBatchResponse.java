package openapisdk.models.operations;



public class JapaneseNameMatchBatchResponse {
    public openapisdk.models.shared.BatchNameMatchedOut batchNameMatchedOut;
    public JapaneseNameMatchBatchResponse withBatchNameMatchedOut(openapisdk.models.shared.BatchNameMatchedOut batchNameMatchedOut) {
        this.batchNameMatchedOut = batchNameMatchedOut;
        return this;
    }
    public String contentType;
    public JapaneseNameMatchBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JapaneseNameMatchBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}