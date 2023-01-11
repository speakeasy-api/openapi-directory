package openapisdk.models.operations;



public class PostAccountAccessConsentsResponse {
    public String contentType;
    public PostAccountAccessConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public PostAccountAccessConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadConsentResponse1 obReadConsentResponse1;
    public PostAccountAccessConsentsResponse withObReadConsentResponse1(openapisdk.models.shared.ObReadConsentResponse1 obReadConsentResponse1) {
        this.obReadConsentResponse1 = obReadConsentResponse1;
        return this;
    }
    public Long statusCode;
    public PostAccountAccessConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}