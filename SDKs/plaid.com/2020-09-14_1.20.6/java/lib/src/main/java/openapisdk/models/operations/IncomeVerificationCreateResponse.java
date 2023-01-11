package openapisdk.models.operations;



public class IncomeVerificationCreateResponse {
    public String contentType;
    public IncomeVerificationCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> incomeVerificationCreateResponse;
    public IncomeVerificationCreateResponse withIncomeVerificationCreateResponse(java.util.Map<String, Object> incomeVerificationCreateResponse) {
        this.incomeVerificationCreateResponse = incomeVerificationCreateResponse;
        return this;
    }
    public Long statusCode;
    public IncomeVerificationCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}