package openapisdk.models.operations;



public class GenderResponse {
    public String contentType;
    public GenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut;
    public GenderResponse withFirstLastNameGenderedOut(openapisdk.models.shared.FirstLastNameGenderedOut firstLastNameGenderedOut) {
        this.firstLastNameGenderedOut = firstLastNameGenderedOut;
        return this;
    }
    public Long statusCode;
    public GenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}