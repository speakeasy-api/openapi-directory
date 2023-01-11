package openapisdk.models.operations;



public class PhoneCodeGeoBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNamePhoneCodedOut batchFirstLastNamePhoneCodedOut;
    public PhoneCodeGeoBatchResponse withBatchFirstLastNamePhoneCodedOut(openapisdk.models.shared.BatchFirstLastNamePhoneCodedOut batchFirstLastNamePhoneCodedOut) {
        this.batchFirstLastNamePhoneCodedOut = batchFirstLastNamePhoneCodedOut;
        return this;
    }
    public String contentType;
    public PhoneCodeGeoBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PhoneCodeGeoBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}