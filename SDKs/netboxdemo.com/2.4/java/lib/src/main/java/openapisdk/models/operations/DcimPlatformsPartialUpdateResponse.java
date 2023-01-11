package openapisdk.models.operations;



public class DcimPlatformsPartialUpdateResponse {
    public String contentType;
    public DcimPlatformsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Platform platform;
    public DcimPlatformsPartialUpdateResponse withPlatform(openapisdk.models.shared.Platform platform) {
        this.platform = platform;
        return this;
    }
    public Long statusCode;
    public DcimPlatformsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}