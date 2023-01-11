package openapisdk.models.operations;



public class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse {
    public String contentType;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
    public openapisdk.models.shared.PayStatementSummary[] payStatementSummaries;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse withPayStatementSummaries(openapisdk.models.shared.PayStatementSummary[] payStatementSummaries) {
        this.payStatementSummaries = payStatementSummaries;
        return this;
    }
}