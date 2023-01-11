package openapisdk.models.operations;



public class GetServerResponse {
    public String contentType;
    public GetServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Server server;
    public GetServerResponse withServer(openapisdk.models.shared.Server server) {
        this.server = server;
        return this;
    }
    public Long statusCode;
    public GetServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}