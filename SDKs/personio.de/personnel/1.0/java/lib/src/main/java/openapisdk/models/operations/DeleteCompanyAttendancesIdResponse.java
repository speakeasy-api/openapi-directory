package openapisdk.models.operations;



public class DeleteCompanyAttendancesIdResponse {
    public String contentType;
    public DeleteCompanyAttendancesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteCompanyAttendancesIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public DeleteCompanyAttendancesIdResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public Long statusCode;
    public DeleteCompanyAttendancesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}