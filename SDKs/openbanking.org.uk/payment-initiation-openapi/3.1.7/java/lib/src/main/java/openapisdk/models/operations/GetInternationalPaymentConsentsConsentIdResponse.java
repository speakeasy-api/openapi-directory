package openapisdk.models.operations;



public class GetInternationalPaymentConsentsConsentIdResponse {
    public byte[] body;
    public GetInternationalPaymentConsentsConsentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInternationalPaymentConsentsConsentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInternationalPaymentConsentsConsentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetInternationalPaymentConsentsConsentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalConsentResponse6 obWriteInternationalConsentResponse6;
    public GetInternationalPaymentConsentsConsentIdResponse withObWriteInternationalConsentResponse6(openapisdk.models.shared.ObWriteInternationalConsentResponse6 obWriteInternationalConsentResponse6) {
        this.obWriteInternationalConsentResponse6 = obWriteInternationalConsentResponse6;
        return this;
    }
    public Long statusCode;
    public GetInternationalPaymentConsentsConsentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}