package openapisdk.models.operations;



public class GetLatestAgentVersionResponse {
    public openapisdk.models.shared.ComponentVersion componentVersion;
    public GetLatestAgentVersionResponse withComponentVersion(openapisdk.models.shared.ComponentVersion componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    public String contentType;
    public GetLatestAgentVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLatestAgentVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}