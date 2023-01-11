package openapisdk.models.operations;



public class DfareportingAccountActiveAdSummariesGetResponse {
    public openapisdk.models.shared.AccountActiveAdSummary accountActiveAdSummary;
    public DfareportingAccountActiveAdSummariesGetResponse withAccountActiveAdSummary(openapisdk.models.shared.AccountActiveAdSummary accountActiveAdSummary) {
        this.accountActiveAdSummary = accountActiveAdSummary;
        return this;
    }
    public String contentType;
    public DfareportingAccountActiveAdSummariesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountActiveAdSummariesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}