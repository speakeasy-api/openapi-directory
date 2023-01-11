package openapisdk.models.operations;



public class StorageProjectsHmacKeysListResponse {
    public String contentType;
    public StorageProjectsHmacKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HmacKeysMetadata hmacKeysMetadata;
    public StorageProjectsHmacKeysListResponse withHmacKeysMetadata(openapisdk.models.shared.HmacKeysMetadata hmacKeysMetadata) {
        this.hmacKeysMetadata = hmacKeysMetadata;
        return this;
    }
    public Long statusCode;
    public StorageProjectsHmacKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}