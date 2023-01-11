package openapisdk.models.operations;



public class NameTypeBatchResponse {
    public openapisdk.models.shared.BatchProperNounCategorizedOut batchProperNounCategorizedOut;
    public NameTypeBatchResponse withBatchProperNounCategorizedOut(openapisdk.models.shared.BatchProperNounCategorizedOut batchProperNounCategorizedOut) {
        this.batchProperNounCategorizedOut = batchProperNounCategorizedOut;
        return this;
    }
    public String contentType;
    public NameTypeBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NameTypeBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}