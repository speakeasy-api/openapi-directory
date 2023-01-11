package openapisdk.models.operations;



public class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse {
    public String contentType;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
    public openapisdk.models.shared.PayStatementDetails[] payStatementDetails;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse withPayStatementDetails(openapisdk.models.shared.PayStatementDetails[] payStatementDetails) {
        this.payStatementDetails = payStatementDetails;
        return this;
    }
}