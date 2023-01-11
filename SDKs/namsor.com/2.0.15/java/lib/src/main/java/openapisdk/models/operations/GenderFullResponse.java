package openapisdk.models.operations;



public class GenderFullResponse {
    public String contentType;
    public GenderFullResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameGenderedOut personalNameGenderedOut;
    public GenderFullResponse withPersonalNameGenderedOut(openapisdk.models.shared.PersonalNameGenderedOut personalNameGenderedOut) {
        this.personalNameGenderedOut = personalNameGenderedOut;
        return this;
    }
    public Long statusCode;
    public GenderFullResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}