package openapisdk.models.operations;



public class GetInternationalStandingOrderConsentsConsentIdResponse {
    public byte[] body;
    public GetInternationalStandingOrderConsentsConsentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInternationalStandingOrderConsentsConsentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInternationalStandingOrderConsentsConsentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetInternationalStandingOrderConsentsConsentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalStandingOrderConsentResponse7 obWriteInternationalStandingOrderConsentResponse7;
    public GetInternationalStandingOrderConsentsConsentIdResponse withObWriteInternationalStandingOrderConsentResponse7(openapisdk.models.shared.ObWriteInternationalStandingOrderConsentResponse7 obWriteInternationalStandingOrderConsentResponse7) {
        this.obWriteInternationalStandingOrderConsentResponse7 = obWriteInternationalStandingOrderConsentResponse7;
        return this;
    }
    public Long statusCode;
    public GetInternationalStandingOrderConsentsConsentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}