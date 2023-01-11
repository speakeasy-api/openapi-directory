package openapisdk.models.operations;



public class AdsenseAccountsReportsGenerateResponse {
    public String contentType;
    public AdsenseAccountsReportsGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportResult reportResult;
    public AdsenseAccountsReportsGenerateResponse withReportResult(openapisdk.models.shared.ReportResult reportResult) {
        this.reportResult = reportResult;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsReportsGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}