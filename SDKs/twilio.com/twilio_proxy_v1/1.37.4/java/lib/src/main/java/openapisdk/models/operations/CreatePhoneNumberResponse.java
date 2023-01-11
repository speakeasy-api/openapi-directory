package openapisdk.models.operations;



public class CreatePhoneNumberResponse {
    public String contentType;
    public CreatePhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatePhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServicePhoneNumber proxyV1ServicePhoneNumber;
    public CreatePhoneNumberResponse withProxyV1ServicePhoneNumber(openapisdk.models.shared.ProxyV1ServicePhoneNumber proxyV1ServicePhoneNumber) {
        this.proxyV1ServicePhoneNumber = proxyV1ServicePhoneNumber;
        return this;
    }
}