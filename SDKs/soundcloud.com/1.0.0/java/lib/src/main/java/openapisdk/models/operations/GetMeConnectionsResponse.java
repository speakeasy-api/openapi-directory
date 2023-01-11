package openapisdk.models.operations;



public class GetMeConnectionsResponse {
    public openapisdk.models.shared.Connection[] connections;
    public GetMeConnectionsResponse withConnections(openapisdk.models.shared.Connection[] connections) {
        this.connections = connections;
        return this;
    }
    public String contentType;
    public GetMeConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeConnectionsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}