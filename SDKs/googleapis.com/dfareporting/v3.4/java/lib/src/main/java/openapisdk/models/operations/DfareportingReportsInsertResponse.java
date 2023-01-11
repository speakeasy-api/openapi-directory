package openapisdk.models.operations;



public class DfareportingReportsInsertResponse {
    public String contentType;
    public DfareportingReportsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public DfareportingReportsInsertResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public DfareportingReportsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}