package openapisdk.models.operations;



public class UpdatePhoneNumberResponse {
    public String contentType;
    public UpdatePhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServicePhoneNumber proxyV1ServicePhoneNumber;
    public UpdatePhoneNumberResponse withProxyV1ServicePhoneNumber(openapisdk.models.shared.ProxyV1ServicePhoneNumber proxyV1ServicePhoneNumber) {
        this.proxyV1ServicePhoneNumber = proxyV1ServicePhoneNumber;
        return this;
    }
}