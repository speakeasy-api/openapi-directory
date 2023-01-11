package openapisdk.models.operations;



public class GenderFullGeoResponse {
    public String contentType;
    public GenderFullGeoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameGenderedOut personalNameGenderedOut;
    public GenderFullGeoResponse withPersonalNameGenderedOut(openapisdk.models.shared.PersonalNameGenderedOut personalNameGenderedOut) {
        this.personalNameGenderedOut = personalNameGenderedOut;
        return this;
    }
    public Long statusCode;
    public GenderFullGeoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}