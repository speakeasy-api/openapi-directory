package openapisdk.models.operations;



public class DeleteCompanyTimeOffsIdResponse {
    public String contentType;
    public DeleteCompanyTimeOffsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteCompanyTimeOffsIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public DeleteCompanyTimeOffsIdResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public Long statusCode;
    public DeleteCompanyTimeOffsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}