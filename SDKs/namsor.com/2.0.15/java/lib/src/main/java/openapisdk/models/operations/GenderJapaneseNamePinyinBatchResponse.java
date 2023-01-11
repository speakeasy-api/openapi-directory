package openapisdk.models.operations;



public class GenderJapaneseNamePinyinBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNameGenderedOut batchFirstLastNameGenderedOut;
    public GenderJapaneseNamePinyinBatchResponse withBatchFirstLastNameGenderedOut(openapisdk.models.shared.BatchFirstLastNameGenderedOut batchFirstLastNameGenderedOut) {
        this.batchFirstLastNameGenderedOut = batchFirstLastNameGenderedOut;
        return this;
    }
    public String contentType;
    public GenderJapaneseNamePinyinBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenderJapaneseNamePinyinBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}