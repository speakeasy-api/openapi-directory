package openapisdk.models.operations;



public class UpdatePaymentInfoResponse {
    public String contentType;
    public UpdatePaymentInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdatePaymentInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaymentInfo paymentInfo;
    public UpdatePaymentInfoResponse withPaymentInfo(openapisdk.models.shared.PaymentInfo paymentInfo) {
        this.paymentInfo = paymentInfo;
        return this;
    }
    public Long statusCode;
    public UpdatePaymentInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}