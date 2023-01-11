package openapisdk.models.operations;



public class DcimPlatformsReadResponse {
    public String contentType;
    public DcimPlatformsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Platform platform;
    public DcimPlatformsReadResponse withPlatform(openapisdk.models.shared.Platform platform) {
        this.platform = platform;
        return this;
    }
    public Long statusCode;
    public DcimPlatformsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}