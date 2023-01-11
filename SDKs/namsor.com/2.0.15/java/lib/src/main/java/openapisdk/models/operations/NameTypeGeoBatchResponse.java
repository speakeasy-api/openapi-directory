package openapisdk.models.operations;



public class NameTypeGeoBatchResponse {
    public openapisdk.models.shared.BatchProperNounCategorizedOut batchProperNounCategorizedOut;
    public NameTypeGeoBatchResponse withBatchProperNounCategorizedOut(openapisdk.models.shared.BatchProperNounCategorizedOut batchProperNounCategorizedOut) {
        this.batchProperNounCategorizedOut = batchProperNounCategorizedOut;
        return this;
    }
    public String contentType;
    public NameTypeGeoBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NameTypeGeoBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}