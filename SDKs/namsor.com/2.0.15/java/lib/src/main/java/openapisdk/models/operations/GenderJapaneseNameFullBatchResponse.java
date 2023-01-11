package openapisdk.models.operations;



public class GenderJapaneseNameFullBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameGenderedOut batchPersonalNameGenderedOut;
    public GenderJapaneseNameFullBatchResponse withBatchPersonalNameGenderedOut(openapisdk.models.shared.BatchPersonalNameGenderedOut batchPersonalNameGenderedOut) {
        this.batchPersonalNameGenderedOut = batchPersonalNameGenderedOut;
        return this;
    }
    public String contentType;
    public GenderJapaneseNameFullBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenderJapaneseNameFullBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}