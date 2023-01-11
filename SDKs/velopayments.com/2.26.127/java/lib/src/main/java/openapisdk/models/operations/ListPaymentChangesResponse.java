package openapisdk.models.operations;



public class ListPaymentChangesResponse {
    public String contentType;
    public ListPaymentChangesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentDeltaResponseV1 paymentDeltaResponseV1;
    public ListPaymentChangesResponse withPaymentDeltaResponseV1(openapisdk.models.shared.PaymentDeltaResponseV1 paymentDeltaResponseV1) {
        this.paymentDeltaResponseV1 = paymentDeltaResponseV1;
        return this;
    }
    public Long statusCode;
    public ListPaymentChangesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}