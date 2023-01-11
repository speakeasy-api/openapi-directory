package openapisdk.models.operations;



public class AdsenseAccountsReportsSavedGenerateResponse {
    public String contentType;
    public AdsenseAccountsReportsSavedGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportResult reportResult;
    public AdsenseAccountsReportsSavedGenerateResponse withReportResult(openapisdk.models.shared.ReportResult reportResult) {
        this.reportResult = reportResult;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsReportsSavedGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}