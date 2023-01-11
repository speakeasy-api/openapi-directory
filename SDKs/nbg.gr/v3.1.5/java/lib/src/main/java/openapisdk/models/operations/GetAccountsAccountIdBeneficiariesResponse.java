package openapisdk.models.operations;



public class GetAccountsAccountIdBeneficiariesResponse {
    public String contentType;
    public GetAccountsAccountIdBeneficiariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdBeneficiariesResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadBeneficiary5 obReadBeneficiary5;
    public GetAccountsAccountIdBeneficiariesResponse withObReadBeneficiary5(openapisdk.models.shared.ObReadBeneficiary5 obReadBeneficiary5) {
        this.obReadBeneficiary5 = obReadBeneficiary5;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdBeneficiariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}