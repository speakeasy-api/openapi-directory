package openapisdk.models.operations;



public class GenderGeoResponse {
    public String contentType;
    public GenderGeoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut;
    public GenderGeoResponse withFirstLastNameGenderedOut(openapisdk.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut) {
        this.firstLastNameGenderedOut = firstLastNameGenderedOut;
        return this;
    }
    public Long statusCode;
    public GenderGeoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}