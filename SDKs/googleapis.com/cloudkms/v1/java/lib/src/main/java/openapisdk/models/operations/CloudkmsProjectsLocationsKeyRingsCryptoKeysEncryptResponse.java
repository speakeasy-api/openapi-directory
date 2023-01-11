package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EncryptResponse encryptResponse;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse withEncryptResponse(openapisdk.models.shared.EncryptResponse encryptResponse) {
        this.encryptResponse = encryptResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}