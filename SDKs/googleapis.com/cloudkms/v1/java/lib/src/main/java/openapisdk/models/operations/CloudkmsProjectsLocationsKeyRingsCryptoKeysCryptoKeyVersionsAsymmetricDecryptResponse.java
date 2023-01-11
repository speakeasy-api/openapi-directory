package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse {
    public openapisdk.models.shared.AsymmetricDecryptResponse asymmetricDecryptResponse;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse withAsymmetricDecryptResponse(openapisdk.models.shared.AsymmetricDecryptResponse asymmetricDecryptResponse) {
        this.asymmetricDecryptResponse = asymmetricDecryptResponse;
        return this;
    }
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}