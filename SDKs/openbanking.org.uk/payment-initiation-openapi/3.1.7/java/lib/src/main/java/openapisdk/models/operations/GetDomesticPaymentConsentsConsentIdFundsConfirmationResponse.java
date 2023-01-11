package openapisdk.models.operations;



public class GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse {
    public byte[] body;
    public GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteFundsConfirmationResponse1 obWriteFundsConfirmationResponse1;
    public GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse withObWriteFundsConfirmationResponse1(openapisdk.models.shared.ObWriteFundsConfirmationResponse1 obWriteFundsConfirmationResponse1) {
        this.obWriteFundsConfirmationResponse1 = obWriteFundsConfirmationResponse1;
        return this;
    }
    public Long statusCode;
    public GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}