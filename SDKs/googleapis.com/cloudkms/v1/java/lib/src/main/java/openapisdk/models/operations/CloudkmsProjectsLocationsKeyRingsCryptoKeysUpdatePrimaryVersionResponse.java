package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKey cryptoKey;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse withCryptoKey(openapisdk.models.shared.CryptoKey cryptoKey) {
        this.cryptoKey = cryptoKey;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}