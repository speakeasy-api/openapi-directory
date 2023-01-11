package openapisdk.models.operations;



public class DeleteAccountAccessConsentsConsentIdResponse {
    public String contentType;
    public DeleteAccountAccessConsentsConsentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public DeleteAccountAccessConsentsConsentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public Long statusCode;
    public DeleteAccountAccessConsentsConsentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}