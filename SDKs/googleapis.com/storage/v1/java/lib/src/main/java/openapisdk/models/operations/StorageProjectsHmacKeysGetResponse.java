package openapisdk.models.operations;



public class StorageProjectsHmacKeysGetResponse {
    public String contentType;
    public StorageProjectsHmacKeysGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HmacKeyMetadata hmacKeyMetadata;
    public StorageProjectsHmacKeysGetResponse withHmacKeyMetadata(openapisdk.models.shared.HmacKeyMetadata hmacKeyMetadata) {
        this.hmacKeyMetadata = hmacKeyMetadata;
        return this;
    }
    public Long statusCode;
    public StorageProjectsHmacKeysGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}