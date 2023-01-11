package openapisdk.models.operations;



public class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse {
    public String contentType;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
    public openapisdk.models.shared.PayStatementSummary[] payStatementSummaries;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse withPayStatementSummaries(openapisdk.models.shared.PayStatementSummary[] payStatementSummaries) {
        this.payStatementSummaries = payStatementSummaries;
        return this;
    }
}