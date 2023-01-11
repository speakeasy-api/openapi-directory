package openapisdk.models.operations;



public class CreateFundsConfirmationsResponse {
    public String contentType;
    public CreateFundsConfirmationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateFundsConfirmationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateFundsConfirmationsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObFundsConfirmationResponse1 obFundsConfirmationResponse1;
    public CreateFundsConfirmationsResponse withObFundsConfirmationResponse1(openapisdk.models.shared.ObFundsConfirmationResponse1 obFundsConfirmationResponse1) {
        this.obFundsConfirmationResponse1 = obFundsConfirmationResponse1;
        return this;
    }
    public Long statusCode;
    public CreateFundsConfirmationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}