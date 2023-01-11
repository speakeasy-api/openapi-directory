package openapisdk.models.operations;



public class ParseNameResponse {
    public String contentType;
    public ParseNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut;
    public ParseNameResponse withPersonalNameParsedOut(openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut) {
        this.personalNameParsedOut = personalNameParsedOut;
        return this;
    }
    public Long statusCode;
    public ParseNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}