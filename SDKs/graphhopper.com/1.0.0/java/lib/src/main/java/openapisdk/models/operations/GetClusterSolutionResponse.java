package openapisdk.models.operations;



public class GetClusterSolutionResponse {
    public openapisdk.models.shared.BadRequest badRequest;
    public GetClusterSolutionResponse withBadRequest(openapisdk.models.shared.BadRequest badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public openapisdk.models.shared.ClusterResponse clusterResponse;
    public GetClusterSolutionResponse withClusterResponse(openapisdk.models.shared.ClusterResponse clusterResponse) {
        this.clusterResponse = clusterResponse;
        return this;
    }
    public String contentType;
    public GetClusterSolutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetClusterSolutionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetClusterSolutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetClusterSolution404ApplicationJson getClusterSolution404ApplicationJSONObject;
    public GetClusterSolutionResponse withGetClusterSolution404ApplicationJsonObject(GetClusterSolution404ApplicationJson getClusterSolution404ApplicationJSONObject) {
        this.getClusterSolution404ApplicationJSONObject = getClusterSolution404ApplicationJSONObject;
        return this;
    }
}