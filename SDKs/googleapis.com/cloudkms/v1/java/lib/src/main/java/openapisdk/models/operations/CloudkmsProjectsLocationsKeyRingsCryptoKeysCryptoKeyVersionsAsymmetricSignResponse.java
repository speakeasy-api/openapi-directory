package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse {
    public openapisdk.models.shared.AsymmetricSignResponse asymmetricSignResponse;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse withAsymmetricSignResponse(openapisdk.models.shared.AsymmetricSignResponse asymmetricSignResponse) {
        this.asymmetricSignResponse = asymmetricSignResponse;
        return this;
    }
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}