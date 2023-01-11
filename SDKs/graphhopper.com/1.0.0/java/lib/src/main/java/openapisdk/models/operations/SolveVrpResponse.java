package openapisdk.models.operations;



public class SolveVrpResponse {
    public openapisdk.models.shared.BadRequest badRequest;
    public SolveVrpResponse withBadRequest(openapisdk.models.shared.BadRequest badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public SolveVrpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public SolveVrpResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.InternalErrorMessage internalErrorMessage;
    public SolveVrpResponse withInternalErrorMessage(openapisdk.models.shared.InternalErrorMessage internalErrorMessage) {
        this.internalErrorMessage = internalErrorMessage;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public SolveVrpResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public Long statusCode;
    public SolveVrpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}