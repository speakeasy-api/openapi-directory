package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse withCryptoKeyVersion(openapisdk.models.shared.CryptoKeyVersion cryptoKeyVersion) {
        this.cryptoKeyVersion = cryptoKeyVersion;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}