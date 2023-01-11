package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse withCryptoKeyVersion(openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion) {
        this.cryptoKeyVersion = cryptoKeyVersion;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}