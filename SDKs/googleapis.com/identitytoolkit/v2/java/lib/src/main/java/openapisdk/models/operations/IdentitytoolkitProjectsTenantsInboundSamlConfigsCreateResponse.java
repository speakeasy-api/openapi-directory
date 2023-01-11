package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig googleCloudIdentitytoolkitAdminV2InboundSamlConfig;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse withGoogleCloudIdentitytoolkitAdminV2InboundSamlConfig(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig googleCloudIdentitytoolkitAdminV2InboundSamlConfig) {
        this.googleCloudIdentitytoolkitAdminV2InboundSamlConfig = googleCloudIdentitytoolkitAdminV2InboundSamlConfig;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}