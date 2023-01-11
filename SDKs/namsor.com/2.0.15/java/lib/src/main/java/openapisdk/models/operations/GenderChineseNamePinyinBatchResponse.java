package openapisdk.models.operations;



public class GenderChineseNamePinyinBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNameGenderedOut batchFirstLastNameGenderedOut;
    public GenderChineseNamePinyinBatchResponse withBatchFirstLastNameGenderedOut(openapisdk.models.shared.BatchFirstLastNameGenderedOut batchFirstLastNameGenderedOut) {
        this.batchFirstLastNameGenderedOut = batchFirstLastNameGenderedOut;
        return this;
    }
    public String contentType;
    public GenderChineseNamePinyinBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenderChineseNamePinyinBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}