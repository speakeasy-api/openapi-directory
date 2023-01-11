package openapisdk.models.operations;



public class GenderChineseNameBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameGenderedOut batchPersonalNameGenderedOut;
    public GenderChineseNameBatchResponse withBatchPersonalNameGenderedOut(openapisdk.models.shared.BatchPersonalNameGenderedOut batchPersonalNameGenderedOut) {
        this.batchPersonalNameGenderedOut = batchPersonalNameGenderedOut;
        return this;
    }
    public String contentType;
    public GenderChineseNameBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenderChineseNameBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}