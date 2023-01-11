package openapisdk.models.operations;



public class AnalyticsadminAccountSummariesListResponse {
    public String contentType;
    public AnalyticsadminAccountSummariesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListAccountSummariesResponse googleAnalyticsAdminV1betaListAccountSummariesResponse;
    public AnalyticsadminAccountSummariesListResponse withGoogleAnalyticsAdminV1betaListAccountSummariesResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListAccountSummariesResponse googleAnalyticsAdminV1betaListAccountSummariesResponse) {
        this.googleAnalyticsAdminV1betaListAccountSummariesResponse = googleAnalyticsAdminV1betaListAccountSummariesResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminAccountSummariesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}