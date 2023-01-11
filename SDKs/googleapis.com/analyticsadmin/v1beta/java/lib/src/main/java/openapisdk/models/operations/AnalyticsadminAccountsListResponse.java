package openapisdk.models.operations;



public class AnalyticsadminAccountsListResponse {
    public String contentType;
    public AnalyticsadminAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListAccountsResponse googleAnalyticsAdminV1betaListAccountsResponse;
    public AnalyticsadminAccountsListResponse withGoogleAnalyticsAdminV1betaListAccountsResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListAccountsResponse googleAnalyticsAdminV1betaListAccountsResponse) {
        this.googleAnalyticsAdminV1betaListAccountsResponse = googleAnalyticsAdminV1betaListAccountsResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}