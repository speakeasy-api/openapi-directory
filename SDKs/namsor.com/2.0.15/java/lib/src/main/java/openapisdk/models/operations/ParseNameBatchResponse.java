package openapisdk.models.operations;



public class ParseNameBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut;
    public ParseNameBatchResponse withBatchPersonalNameParsedOut(openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut) {
        this.batchPersonalNameParsedOut = batchPersonalNameParsedOut;
        return this;
    }
    public String contentType;
    public ParseNameBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParseNameBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}