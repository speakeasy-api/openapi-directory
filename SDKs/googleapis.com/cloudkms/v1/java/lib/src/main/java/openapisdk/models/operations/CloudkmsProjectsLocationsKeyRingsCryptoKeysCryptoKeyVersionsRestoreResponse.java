package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse withCryptoKeyVersion(openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion) {
        this.cryptoKeyVersion = cryptoKeyVersion;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}