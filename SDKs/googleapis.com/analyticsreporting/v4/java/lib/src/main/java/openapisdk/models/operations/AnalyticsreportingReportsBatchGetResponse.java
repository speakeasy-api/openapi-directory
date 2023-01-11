package openapisdk.models.operations;



public class AnalyticsreportingReportsBatchGetResponse {
    public String contentType;
    public AnalyticsreportingReportsBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetReportsResponse getReportsResponse;
    public AnalyticsreportingReportsBatchGetResponse withGetReportsResponse(openapisdk.models.shared.GetReportsResponse getReportsResponse) {
        this.getReportsResponse = getReportsResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsreportingReportsBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}