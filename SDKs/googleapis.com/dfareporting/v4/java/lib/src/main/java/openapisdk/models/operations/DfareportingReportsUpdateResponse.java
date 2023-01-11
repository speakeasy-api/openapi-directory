package openapisdk.models.operations;



public class DfareportingReportsUpdateResponse {
    public String contentType;
    public DfareportingReportsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public DfareportingReportsUpdateResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public DfareportingReportsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}