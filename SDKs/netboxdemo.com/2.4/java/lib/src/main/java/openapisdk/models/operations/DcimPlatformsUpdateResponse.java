package openapisdk.models.operations;



public class DcimPlatformsUpdateResponse {
    public String contentType;
    public DcimPlatformsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Platform platform;
    public DcimPlatformsUpdateResponse withPlatform(openapisdk.models.shared.Platform platform) {
        this.platform = platform;
        return this;
    }
    public Long statusCode;
    public DcimPlatformsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}