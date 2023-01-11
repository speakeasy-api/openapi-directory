package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCryptoKeysResponse listCryptoKeysResponse;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse withListCryptoKeysResponse(openapisdk.models.shared.ListCryptoKeysResponse listCryptoKeysResponse) {
        this.listCryptoKeysResponse = listCryptoKeysResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}