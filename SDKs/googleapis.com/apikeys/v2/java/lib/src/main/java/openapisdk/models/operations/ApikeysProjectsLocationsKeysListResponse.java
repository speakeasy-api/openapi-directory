package openapisdk.models.operations;



public class ApikeysProjectsLocationsKeysListResponse {
    public String contentType;
    public ApikeysProjectsLocationsKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApikeysProjectsLocationsKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V2ListKeysResponse v2ListKeysResponse;
    public ApikeysProjectsLocationsKeysListResponse withV2ListKeysResponse(openapisdk.models.shared.V2ListKeysResponse v2ListKeysResponse) {
        this.v2ListKeysResponse = v2ListKeysResponse;
        return this;
    }
}