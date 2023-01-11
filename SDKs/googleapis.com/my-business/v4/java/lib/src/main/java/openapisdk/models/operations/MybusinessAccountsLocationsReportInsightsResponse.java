package openapisdk.models.operations;



public class MybusinessAccountsLocationsReportInsightsResponse {
    public String contentType;
    public MybusinessAccountsLocationsReportInsightsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportLocationInsightsResponse reportLocationInsightsResponse;
    public MybusinessAccountsLocationsReportInsightsResponse withReportLocationInsightsResponse(openapisdk.models.shared.ReportLocationInsightsResponse reportLocationInsightsResponse) {
        this.reportLocationInsightsResponse = reportLocationInsightsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsReportInsightsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}