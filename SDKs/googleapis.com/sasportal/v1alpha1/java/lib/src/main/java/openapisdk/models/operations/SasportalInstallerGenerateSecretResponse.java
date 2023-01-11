package openapisdk.models.operations;



public class SasportalInstallerGenerateSecretResponse {
    public String contentType;
    public SasportalInstallerGenerateSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalGenerateSecretResponse sasPortalGenerateSecretResponse;
    public SasportalInstallerGenerateSecretResponse withSasPortalGenerateSecretResponse(openapisdk.models.shared.SasPortalGenerateSecretResponse sasPortalGenerateSecretResponse) {
        this.sasPortalGenerateSecretResponse = sasPortalGenerateSecretResponse;
        return this;
    }
    public Long statusCode;
    public SasportalInstallerGenerateSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}