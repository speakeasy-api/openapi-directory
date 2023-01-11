package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse withCryptoKeyVersion(openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion) {
        this.cryptoKeyVersion = cryptoKeyVersion;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}