package openapisdk.models.operations;



public class PhoneCodeBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNamePhoneCodedOut batchFirstLastNamePhoneCodedOut;
    public PhoneCodeBatchResponse withBatchFirstLastNamePhoneCodedOut(openapisdk.models.shared.BatchFirstLastNamePhoneCodedOut batchFirstLastNamePhoneCodedOut) {
        this.batchFirstLastNamePhoneCodedOut = batchFirstLastNamePhoneCodedOut;
        return this;
    }
    public String contentType;
    public PhoneCodeBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PhoneCodeBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}