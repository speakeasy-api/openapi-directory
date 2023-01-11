package openapisdk.models.operations;



public class AdsensehostReportsGenerateResponse {
    public String contentType;
    public AdsensehostReportsGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public AdsensehostReportsGenerateResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public AdsensehostReportsGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}