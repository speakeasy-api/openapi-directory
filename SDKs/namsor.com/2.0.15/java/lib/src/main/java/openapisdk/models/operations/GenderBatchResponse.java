package openapisdk.models.operations;



public class GenderBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNameGenderedOut batchFirstLastNameGenderedOut;
    public GenderBatchResponse withBatchFirstLastNameGenderedOut(openapisdk.models.shared.BatchFirstLastNameGenderedOut batchFirstLastNameGenderedOut) {
        this.batchFirstLastNameGenderedOut = batchFirstLastNameGenderedOut;
        return this;
    }
    public String contentType;
    public GenderBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenderBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}