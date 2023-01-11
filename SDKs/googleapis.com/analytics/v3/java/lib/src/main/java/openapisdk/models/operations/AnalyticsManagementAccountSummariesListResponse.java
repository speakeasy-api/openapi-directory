package openapisdk.models.operations;



public class AnalyticsManagementAccountSummariesListResponse {
    public openapisdk.models.shared.AccountSummaries accountSummaries;
    public AnalyticsManagementAccountSummariesListResponse withAccountSummaries(openapisdk.models.shared.AccountSummaries accountSummaries) {
        this.accountSummaries = accountSummaries;
        return this;
    }
    public String contentType;
    public AnalyticsManagementAccountSummariesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementAccountSummariesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}