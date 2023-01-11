package openapisdk.models.operations;



public class IncomeVerificationRefreshResponse {
    public String contentType;
    public IncomeVerificationRefreshResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public IncomeVerificationRefreshResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.IncomeVerificationRefreshResponse incomeVerificationRefreshResponse;
    public IncomeVerificationRefreshResponse withIncomeVerificationRefreshResponse(openapisdk.models.shared.IncomeVerificationRefreshResponse incomeVerificationRefreshResponse) {
        this.incomeVerificationRefreshResponse = incomeVerificationRefreshResponse;
        return this;
    }
    public Long statusCode;
    public IncomeVerificationRefreshResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}