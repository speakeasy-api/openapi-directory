package openapisdk.models.operations;



public class ApikeysProjectsLocationsKeysGetResponse {
    public String contentType;
    public ApikeysProjectsLocationsKeysGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApikeysProjectsLocationsKeysGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V2Key v2Key;
    public ApikeysProjectsLocationsKeysGetResponse withV2Key(openapisdk.models.shared.V2Key v2Key) {
        this.v2Key = v2Key;
        return this;
    }
}