package openapisdk.models.operations;



public class IncomeVerificationSummaryGetResponse {
    public String contentType;
    public IncomeVerificationSummaryGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> incomeVerificationSummaryGetResponse;
    public IncomeVerificationSummaryGetResponse withIncomeVerificationSummaryGetResponse(java.util.Map<String, Object> incomeVerificationSummaryGetResponse) {
        this.incomeVerificationSummaryGetResponse = incomeVerificationSummaryGetResponse;
        return this;
    }
    public Long statusCode;
    public IncomeVerificationSummaryGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}