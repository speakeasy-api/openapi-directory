package openapisdk.models.operations;



public class PlatformsReadResponse {
    public String contentType;
    public PlatformsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlatformSingle platformSingle;
    public PlatformsReadResponse withPlatformSingle(openapisdk.models.shared.PlatformSingle platformSingle) {
        this.platformSingle = platformSingle;
        return this;
    }
    public Long statusCode;
    public PlatformsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}