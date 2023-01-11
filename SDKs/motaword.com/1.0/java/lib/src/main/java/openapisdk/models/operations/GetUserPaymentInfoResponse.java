package openapisdk.models.operations;



public class GetUserPaymentInfoResponse {
    public String contentType;
    public GetUserPaymentInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUserPaymentInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaymentInfo paymentInfo;
    public GetUserPaymentInfoResponse withPaymentInfo(openapisdk.models.shared.PaymentInfo paymentInfo) {
        this.paymentInfo = paymentInfo;
        return this;
    }
    public Long statusCode;
    public GetUserPaymentInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}