package openapisdk.models.operations;



public class ListPaymentChangesV4Response {
    public String contentType;
    public ListPaymentChangesV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentDeltaResponse paymentDeltaResponse;
    public ListPaymentChangesV4Response withPaymentDeltaResponse(openapisdk.models.shared.PaymentDeltaResponse paymentDeltaResponse) {
        this.paymentDeltaResponse = paymentDeltaResponse;
        return this;
    }
    public Long statusCode;
    public ListPaymentChangesV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}