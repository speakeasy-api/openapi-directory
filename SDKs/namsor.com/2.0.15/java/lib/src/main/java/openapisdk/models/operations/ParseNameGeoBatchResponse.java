package openapisdk.models.operations;



public class ParseNameGeoBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut;
    public ParseNameGeoBatchResponse withBatchPersonalNameParsedOut(openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut) {
        this.batchPersonalNameParsedOut = batchPersonalNameParsedOut;
        return this;
    }
    public String contentType;
    public ParseNameGeoBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParseNameGeoBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}