package openapisdk.models.operations;



public class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse {
    public String contentType;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
    public openapisdk.models.shared.PayStatementDetails[] payStatementDetails;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse withPayStatementDetails(openapisdk.models.shared.PayStatementDetails[] payStatementDetails) {
        this.payStatementDetails = payStatementDetails;
        return this;
    }
}