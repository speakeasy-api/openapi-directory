package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKey cryptoKey;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse withCryptoKey(openapisdk.models.shared.CryptoKey cryptoKey) {
        this.cryptoKey = cryptoKey;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}