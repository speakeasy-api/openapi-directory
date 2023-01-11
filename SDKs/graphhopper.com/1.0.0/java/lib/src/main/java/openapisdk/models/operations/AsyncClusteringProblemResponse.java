package openapisdk.models.operations;



public class AsyncClusteringProblemResponse {
    public openapisdk.models.shared.BadRequest badRequest;
    public AsyncClusteringProblemResponse withBadRequest(openapisdk.models.shared.BadRequest badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public AsyncClusteringProblemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AsyncClusteringProblemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.InternalErrorMessage internalErrorMessage;
    public AsyncClusteringProblemResponse withInternalErrorMessage(openapisdk.models.shared.InternalErrorMessage internalErrorMessage) {
        this.internalErrorMessage = internalErrorMessage;
        return this;
    }
    public openapisdk.models.shared.JobId jobId;
    public AsyncClusteringProblemResponse withJobId(openapisdk.models.shared.JobId jobId) {
        this.jobId = jobId;
        return this;
    }
    public Long statusCode;
    public AsyncClusteringProblemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}