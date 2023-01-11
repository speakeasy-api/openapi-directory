package openapisdk.models.operations;



public class MybusinessAccountsLocationsLocalPostsReportInsightsResponse {
    public String contentType;
    public MybusinessAccountsLocationsLocalPostsReportInsightsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportLocalPostInsightsResponse reportLocalPostInsightsResponse;
    public MybusinessAccountsLocationsLocalPostsReportInsightsResponse withReportLocalPostInsightsResponse(openapisdk.models.shared.ReportLocalPostInsightsResponse reportLocalPostInsightsResponse) {
        this.reportLocalPostInsightsResponse = reportLocalPostInsightsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsLocalPostsReportInsightsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}