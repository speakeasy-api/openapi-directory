package openapisdk.models.operations;



public class ParseJapaneseNameBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut;
    public ParseJapaneseNameBatchResponse withBatchPersonalNameParsedOut(openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut) {
        this.batchPersonalNameParsedOut = batchPersonalNameParsedOut;
        return this;
    }
    public String contentType;
    public ParseJapaneseNameBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParseJapaneseNameBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}