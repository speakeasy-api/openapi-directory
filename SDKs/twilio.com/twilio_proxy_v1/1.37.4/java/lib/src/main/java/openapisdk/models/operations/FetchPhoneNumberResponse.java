package openapisdk.models.operations;



public class FetchPhoneNumberResponse {
    public String contentType;
    public FetchPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProxyV1ServicePhoneNumber proxyV1ServicePhoneNumber;
    public FetchPhoneNumberResponse withProxyV1ServicePhoneNumber(openapisdk.models.shared.ProxyV1ServicePhoneNumber proxyV1ServicePhoneNumber) {
        this.proxyV1ServicePhoneNumber = proxyV1ServicePhoneNumber;
        return this;
    }
}