package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCryptoKeyVersionsResponse listCryptoKeyVersionsResponse;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse withListCryptoKeyVersionsResponse(openapisdk.models.shared.ListCryptoKeyVersionsResponse listCryptoKeyVersionsResponse) {
        this.listCryptoKeyVersionsResponse = listCryptoKeyVersionsResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}