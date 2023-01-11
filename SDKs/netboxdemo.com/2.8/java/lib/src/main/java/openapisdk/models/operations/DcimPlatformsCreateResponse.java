package openapisdk.models.operations;



public class DcimPlatformsCreateResponse {
    public String contentType;
    public DcimPlatformsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Platform platform;
    public DcimPlatformsCreateResponse withPlatform(openapisdk.models.shared.Platform platform) {
        this.platform = platform;
        return this;
    }
    public Long statusCode;
    public DcimPlatformsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}