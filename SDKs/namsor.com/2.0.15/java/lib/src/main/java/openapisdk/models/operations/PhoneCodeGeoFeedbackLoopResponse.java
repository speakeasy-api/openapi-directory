package openapisdk.models.operations;



public class PhoneCodeGeoFeedbackLoopResponse {
    public String contentType;
    public PhoneCodeGeoFeedbackLoopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNamePhoneCodedOut firstLastNamePhoneCodedOut;
    public PhoneCodeGeoFeedbackLoopResponse withFirstLastNamePhoneCodedOut(openapisdk.models.shared.FirstLastNamePhoneCodedOut firstLastNamePhoneCodedOut) {
        this.firstLastNamePhoneCodedOut = firstLastNamePhoneCodedOut;
        return this;
    }
    public Long statusCode;
    public PhoneCodeGeoFeedbackLoopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}