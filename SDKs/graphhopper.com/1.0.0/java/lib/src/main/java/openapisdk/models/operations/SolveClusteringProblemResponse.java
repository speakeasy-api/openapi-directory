package openapisdk.models.operations;



public class SolveClusteringProblemResponse {
    public openapisdk.models.shared.BadRequest badRequest;
    public SolveClusteringProblemResponse withBadRequest(openapisdk.models.shared.BadRequest badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public openapisdk.models.shared.ClusterResponse clusterResponse;
    public SolveClusteringProblemResponse withClusterResponse(openapisdk.models.shared.ClusterResponse clusterResponse) {
        this.clusterResponse = clusterResponse;
        return this;
    }
    public String contentType;
    public SolveClusteringProblemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public SolveClusteringProblemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.InternalErrorMessage internalErrorMessage;
    public SolveClusteringProblemResponse withInternalErrorMessage(openapisdk.models.shared.InternalErrorMessage internalErrorMessage) {
        this.internalErrorMessage = internalErrorMessage;
        return this;
    }
    public Long statusCode;
    public SolveClusteringProblemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}