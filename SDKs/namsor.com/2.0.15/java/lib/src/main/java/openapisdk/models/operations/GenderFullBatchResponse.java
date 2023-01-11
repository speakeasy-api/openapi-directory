package openapisdk.models.operations;



public class GenderFullBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameGenderedOut batchPersonalNameGenderedOut;
    public GenderFullBatchResponse withBatchPersonalNameGenderedOut(openapisdk.models.shared.BatchPersonalNameGenderedOut batchPersonalNameGenderedOut) {
        this.batchPersonalNameGenderedOut = batchPersonalNameGenderedOut;
        return this;
    }
    public String contentType;
    public GenderFullBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenderFullBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}