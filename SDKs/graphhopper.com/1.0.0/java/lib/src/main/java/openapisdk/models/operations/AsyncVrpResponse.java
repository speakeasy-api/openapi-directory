package openapisdk.models.operations;



public class AsyncVrpResponse {
    public openapisdk.models.shared.BadRequest badRequest;
    public AsyncVrpResponse withBadRequest(openapisdk.models.shared.BadRequest badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public AsyncVrpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AsyncVrpResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.InternalErrorMessage internalErrorMessage;
    public AsyncVrpResponse withInternalErrorMessage(openapisdk.models.shared.InternalErrorMessage internalErrorMessage) {
        this.internalErrorMessage = internalErrorMessage;
        return this;
    }
    public openapisdk.models.shared.JobId jobId;
    public AsyncVrpResponse withJobId(openapisdk.models.shared.JobId jobId) {
        this.jobId = jobId;
        return this;
    }
    public Long statusCode;
    public AsyncVrpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}