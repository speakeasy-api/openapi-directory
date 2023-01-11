package openapisdk.models.operations;



public class AdsensehostAccountsReportsGenerateResponse {
    public String contentType;
    public AdsensehostAccountsReportsGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public AdsensehostAccountsReportsGenerateResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public AdsensehostAccountsReportsGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}