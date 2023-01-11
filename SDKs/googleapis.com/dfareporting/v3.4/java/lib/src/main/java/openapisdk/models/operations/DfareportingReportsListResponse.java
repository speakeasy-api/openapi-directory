package openapisdk.models.operations;



public class DfareportingReportsListResponse {
    public String contentType;
    public DfareportingReportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportList reportList;
    public DfareportingReportsListResponse withReportList(openapisdk.models.shared.ReportList reportList) {
        this.reportList = reportList;
        return this;
    }
    public Long statusCode;
    public DfareportingReportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}