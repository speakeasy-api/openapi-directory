package openapisdk.models.operations;



public class ParseChineseNameBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut;
    public ParseChineseNameBatchResponse withBatchPersonalNameParsedOut(openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut) {
        this.batchPersonalNameParsedOut = batchPersonalNameParsedOut;
        return this;
    }
    public String contentType;
    public ParseChineseNameBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParseChineseNameBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}