package openapisdk.models.operations;



public class CreateFundsConfirmationConsentsResponse {
    public String contentType;
    public CreateFundsConfirmationConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateFundsConfirmationConsentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateFundsConfirmationConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObFundsConfirmationConsentResponse1 obFundsConfirmationConsentResponse1;
    public CreateFundsConfirmationConsentsResponse withObFundsConfirmationConsentResponse1(openapisdk.models.shared.ObFundsConfirmationConsentResponse1 obFundsConfirmationConsentResponse1) {
        this.obFundsConfirmationConsentResponse1 = obFundsConfirmationConsentResponse1;
        return this;
    }
    public Long statusCode;
    public CreateFundsConfirmationConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}