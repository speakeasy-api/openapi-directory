package openapisdk.models.operations;



public class ParseNameGeoResponse {
    public String contentType;
    public ParseNameGeoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut;
    public ParseNameGeoResponse withPersonalNameParsedOut(openapisdk.models.shared.PersonalNameParsedOut personalNameParsedOut) {
        this.personalNameParsedOut = personalNameParsedOut;
        return this;
    }
    public Long statusCode;
    public ParseNameGeoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}