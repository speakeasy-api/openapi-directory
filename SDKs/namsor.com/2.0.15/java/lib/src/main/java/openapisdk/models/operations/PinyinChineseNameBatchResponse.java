package openapisdk.models.operations;



public class PinyinChineseNameBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut;
    public PinyinChineseNameBatchResponse withBatchPersonalNameParsedOut(openapisdk.models.shared.BatchPersonalNameParsedOut batchPersonalNameParsedOut) {
        this.batchPersonalNameParsedOut = batchPersonalNameParsedOut;
        return this;
    }
    public String contentType;
    public PinyinChineseNameBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PinyinChineseNameBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}