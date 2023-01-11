package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DecryptResponse decryptResponse;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse withDecryptResponse(openapisdk.models.shared.DecryptResponse decryptResponse) {
        this.decryptResponse = decryptResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}