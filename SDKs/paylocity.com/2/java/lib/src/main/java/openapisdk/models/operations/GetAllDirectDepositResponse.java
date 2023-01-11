package openapisdk.models.operations;



public class GetAllDirectDepositResponse {
    public String contentType;
    public GetAllDirectDepositResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllDirectDepositResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.DirectDeposit[] directDeposits;
    public GetAllDirectDepositResponse withDirectDeposits(openapisdk.models.shared.DirectDeposit[] directDeposits) {
        this.directDeposits = directDeposits;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetAllDirectDepositResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}