package openapisdk.models.operations;



public class PinyinChineseNameResponse {
    public String contentType;
    public PinyinChineseNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut;
    public PinyinChineseNameResponse withPersonalNameParsedOut(openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut) {
        this.personalNameParsedOut = personalNameParsedOut;
        return this;
    }
    public Long statusCode;
    public PinyinChineseNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}