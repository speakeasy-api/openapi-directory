package openapisdk.models.operations;



public class DfareportingPlatformTypesListResponse {
    public String contentType;
    public DfareportingPlatformTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlatformTypesListResponse platformTypesListResponse;
    public DfareportingPlatformTypesListResponse withPlatformTypesListResponse(openapisdk.models.shared.PlatformTypesListResponse platformTypesListResponse) {
        this.platformTypesListResponse = platformTypesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingPlatformTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}