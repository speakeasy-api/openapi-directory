package openapisdk.models.operations;



public class DfareportingPlatformTypesGetResponse {
    public String contentType;
    public DfareportingPlatformTypesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlatformType platformType;
    public DfareportingPlatformTypesGetResponse withPlatformType(openapisdk.models.shared.PlatformType platformType) {
        this.platformType = platformType;
        return this;
    }
    public Long statusCode;
    public DfareportingPlatformTypesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}