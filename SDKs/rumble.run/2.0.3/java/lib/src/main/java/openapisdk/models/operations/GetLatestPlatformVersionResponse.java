package openapisdk.models.operations;



public class GetLatestPlatformVersionResponse {
    public openapisdk.models.shared.ComponentVersion componentVersion;
    public GetLatestPlatformVersionResponse withComponentVersion(openapisdk.models.shared.ComponentVersion componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    public String contentType;
    public GetLatestPlatformVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLatestPlatformVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}