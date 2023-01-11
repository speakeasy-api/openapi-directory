package openapisdk.models.operations;



public class PhoneCodeGeoResponse {
    public String contentType;
    public PhoneCodeGeoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNamePhoneCodedOut firstLastNamePhoneCodedOut;
    public PhoneCodeGeoResponse withFirstLastNamePhoneCodedOut(openapisdk.models.shared.FirstLastNamePhoneCodedOut firstLastNamePhoneCodedOut) {
        this.firstLastNamePhoneCodedOut = firstLastNamePhoneCodedOut;
        return this;
    }
    public Long statusCode;
    public PhoneCodeGeoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}