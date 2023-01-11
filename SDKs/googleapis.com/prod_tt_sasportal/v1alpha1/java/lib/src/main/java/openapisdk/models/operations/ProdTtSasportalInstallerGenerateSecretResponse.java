package openapisdk.models.operations;



public class ProdTtSasportalInstallerGenerateSecretResponse {
    public String contentType;
    public ProdTtSasportalInstallerGenerateSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalGenerateSecretResponse sasPortalGenerateSecretResponse;
    public ProdTtSasportalInstallerGenerateSecretResponse withSasPortalGenerateSecretResponse(openapisdk.models.shared.SasPortalGenerateSecretResponse sasPortalGenerateSecretResponse) {
        this.sasPortalGenerateSecretResponse = sasPortalGenerateSecretResponse;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalInstallerGenerateSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}