package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalInstallerGenerateSecretRequest {
    public ProdTtSasportalInstallerGenerateSecretQueryParams queryParams;
    public ProdTtSasportalInstallerGenerateSecretRequest withQueryParams(ProdTtSasportalInstallerGenerateSecretQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ProdTtSasportalInstallerGenerateSecretRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalInstallerGenerateSecretSecurity security;
    public ProdTtSasportalInstallerGenerateSecretRequest withSecurity(ProdTtSasportalInstallerGenerateSecretSecurity security) {
        this.security = security;
        return this;
    }
}