package openapisdk.models.operations;



public class ParseJapaneseNameResponse {
    public String contentType;
    public ParseJapaneseNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut;
    public ParseJapaneseNameResponse withPersonalNameParsedOut(openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut) {
        this.personalNameParsedOut = personalNameParsedOut;
        return this;
    }
    public Long statusCode;
    public ParseJapaneseNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}