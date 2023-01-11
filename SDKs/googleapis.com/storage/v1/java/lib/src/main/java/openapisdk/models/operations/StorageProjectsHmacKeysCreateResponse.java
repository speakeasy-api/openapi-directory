package openapisdk.models.operations;



public class StorageProjectsHmacKeysCreateResponse {
    public String contentType;
    public StorageProjectsHmacKeysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HmacKey hmacKey;
    public StorageProjectsHmacKeysCreateResponse withHmacKey(openapisdk.models.shared.HmacKey hmacKey) {
        this.hmacKey = hmacKey;
        return this;
    }
    public Long statusCode;
    public StorageProjectsHmacKeysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}