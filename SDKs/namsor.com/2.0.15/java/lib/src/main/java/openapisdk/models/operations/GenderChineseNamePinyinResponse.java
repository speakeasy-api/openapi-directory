package openapisdk.models.operations;



public class GenderChineseNamePinyinResponse {
    public String contentType;
    public GenderChineseNamePinyinResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut;
    public GenderChineseNamePinyinResponse withFirstLastNameGenderedOut(openapisdk.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut) {
        this.firstLastNameGenderedOut = firstLastNameGenderedOut;
        return this;
    }
    public Long statusCode;
    public GenderChineseNamePinyinResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}