package openapisdk.models.operations;



public class GenderJapaneseNamePinyinResponse {
    public String contentType;
    public GenderJapaneseNamePinyinResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut;
    public GenderJapaneseNamePinyinResponse withFirstLastNameGenderedOut(openapisdk.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut) {
        this.firstLastNameGenderedOut = firstLastNameGenderedOut;
        return this;
    }
    public Long statusCode;
    public GenderJapaneseNamePinyinResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}