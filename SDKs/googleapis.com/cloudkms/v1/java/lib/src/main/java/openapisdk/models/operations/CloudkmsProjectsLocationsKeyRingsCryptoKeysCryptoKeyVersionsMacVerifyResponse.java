package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MacVerifyResponse macVerifyResponse;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse withMacVerifyResponse(openapisdk.models.shared.MacVerifyResponse macVerifyResponse) {
        this.macVerifyResponse = macVerifyResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}