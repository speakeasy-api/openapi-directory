package openapisdk.models.operations;



public class OriginBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNameOriginedOut batchFirstLastNameOriginedOut;
    public OriginBatchResponse withBatchFirstLastNameOriginedOut(openapisdk.models.shared.BatchFirstLastNameOriginedOut batchFirstLastNameOriginedOut) {
        this.batchFirstLastNameOriginedOut = batchFirstLastNameOriginedOut;
        return this;
    }
    public String contentType;
    public OriginBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OriginBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}