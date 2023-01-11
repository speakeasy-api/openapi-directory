package openapisdk.models.operations;



public class GenderGeoBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNameGenderedOut batchFirstLastNameGenderedOut;
    public GenderGeoBatchResponse withBatchFirstLastNameGenderedOut(openapisdk.models.shared.BatchFirstLastNameGenderedOut batchFirstLastNameGenderedOut) {
        this.batchFirstLastNameGenderedOut = batchFirstLastNameGenderedOut;
        return this;
    }
    public String contentType;
    public GenderGeoBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenderGeoBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}