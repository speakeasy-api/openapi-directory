package openapisdk.models.operations;



public class AdexchangebuyerPerformanceReportListResponse {
    public String contentType;
    public AdexchangebuyerPerformanceReportListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PerformanceReportList performanceReportList;
    public AdexchangebuyerPerformanceReportListResponse withPerformanceReportList(openapisdk.models.shared.PerformanceReportList performanceReportList) {
        this.performanceReportList = performanceReportList;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerPerformanceReportListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}