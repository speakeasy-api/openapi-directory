package openapisdk.models.operations;



public class ParseChineseNameResponse {
    public String contentType;
    public ParseChineseNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut;
    public ParseChineseNameResponse withPersonalNameParsedOut(openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut) {
        this.personalNameParsedOut = personalNameParsedOut;
        return this;
    }
    public Long statusCode;
    public ParseChineseNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}