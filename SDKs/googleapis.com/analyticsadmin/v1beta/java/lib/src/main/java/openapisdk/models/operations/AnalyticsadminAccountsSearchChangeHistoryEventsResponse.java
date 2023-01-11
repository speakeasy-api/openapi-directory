package openapisdk.models.operations;



public class AnalyticsadminAccountsSearchChangeHistoryEventsResponse {
    public String contentType;
    public AnalyticsadminAccountsSearchChangeHistoryEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse googleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse;
    public AnalyticsadminAccountsSearchChangeHistoryEventsResponse withGoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse googleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse) {
        this.googleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse = googleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminAccountsSearchChangeHistoryEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}