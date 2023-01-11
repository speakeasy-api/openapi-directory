package openapisdk.models.operations;



public class PutServerResponse {
    public String contentType;
    public PutServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Server server;
    public PutServerResponse withServer(openapisdk.models.shared.Server server) {
        this.server = server;
        return this;
    }
    public Long statusCode;
    public PutServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}