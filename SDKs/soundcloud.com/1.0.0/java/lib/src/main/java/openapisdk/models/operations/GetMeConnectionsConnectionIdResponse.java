package openapisdk.models.operations;



public class GetMeConnectionsConnectionIdResponse {
    public openapisdk.models.shared.Connection connection;
    public GetMeConnectionsConnectionIdResponse withConnection(openapisdk.models.shared.Connection connection) {
        this.connection = connection;
        return this;
    }
    public String contentType;
    public GetMeConnectionsConnectionIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeConnectionsConnectionIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeConnectionsConnectionIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}