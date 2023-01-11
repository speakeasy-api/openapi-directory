package openapisdk.models.operations;



public class GenderFullGeoBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameGenderedOut batchPersonalNameGenderedOut;
    public GenderFullGeoBatchResponse withBatchPersonalNameGenderedOut(openapisdk.models.shared.BatchPersonalNameGenderedOut batchPersonalNameGenderedOut) {
        this.batchPersonalNameGenderedOut = batchPersonalNameGenderedOut;
        return this;
    }
    public String contentType;
    public GenderFullGeoBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenderFullGeoBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}