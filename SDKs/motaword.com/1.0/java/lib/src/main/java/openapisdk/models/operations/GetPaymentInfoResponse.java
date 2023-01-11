package openapisdk.models.operations;



public class GetPaymentInfoResponse {
    public String contentType;
    public GetPaymentInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPaymentInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaymentInfo paymentInfo;
    public GetPaymentInfoResponse withPaymentInfo(openapisdk.models.shared.PaymentInfo paymentInfo) {
        this.paymentInfo = paymentInfo;
        return this;
    }
    public Long statusCode;
    public GetPaymentInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}