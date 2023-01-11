package openapisdk.models.operations;



public class StorageProjectsHmacKeysUpdateResponse {
    public String contentType;
    public StorageProjectsHmacKeysUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HmacKeyMetadata hmacKeyMetadata;
    public StorageProjectsHmacKeysUpdateResponse withHmacKeyMetadata(openapisdk.models.shared.HmacKeyMetadata hmacKeyMetadata) {
        this.hmacKeyMetadata = hmacKeyMetadata;
        return this;
    }
    public Long statusCode;
    public StorageProjectsHmacKeysUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}