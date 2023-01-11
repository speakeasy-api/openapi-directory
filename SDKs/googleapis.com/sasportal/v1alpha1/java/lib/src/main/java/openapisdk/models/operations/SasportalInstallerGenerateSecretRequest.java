package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalInstallerGenerateSecretRequest {
    public SasportalInstallerGenerateSecretQueryParams queryParams;
    public SasportalInstallerGenerateSecretRequest withQueryParams(SasportalInstallerGenerateSecretQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public SasportalInstallerGenerateSecretRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public SasportalInstallerGenerateSecretSecurity security;
    public SasportalInstallerGenerateSecretRequest withSecurity(SasportalInstallerGenerateSecretSecurity security) {
        this.security = security;
        return this;
    }
}