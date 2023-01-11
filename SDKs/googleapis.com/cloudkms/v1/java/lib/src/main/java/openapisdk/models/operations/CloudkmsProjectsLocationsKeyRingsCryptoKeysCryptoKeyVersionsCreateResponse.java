package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse withCryptoKeyVersion(openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion) {
        this.cryptoKeyVersion = cryptoKeyVersion;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}