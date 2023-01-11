package openapisdk.models.operations;



public class PhoneCodeResponse {
    public String contentType;
    public PhoneCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNamePhoneCodedOut firstLastNamePhoneCodedOut;
    public PhoneCodeResponse withFirstLastNamePhoneCodedOut(openapisdk.models.shared.FirstLastNamePhoneCodedOut firstLastNamePhoneCodedOut) {
        this.firstLastNamePhoneCodedOut = firstLastNamePhoneCodedOut;
        return this;
    }
    public Long statusCode;
    public PhoneCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}