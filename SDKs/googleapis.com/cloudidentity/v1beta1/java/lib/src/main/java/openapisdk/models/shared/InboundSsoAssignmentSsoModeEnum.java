package openapisdk.models.shared;


public enum InboundSsoAssignmentSsoModeEnum {
    SSO_MODE_UNSPECIFIED("SSO_MODE_UNSPECIFIED"),
    SSO_OFF("SSO_OFF"),
    SAML_SSO("SAML_SSO"),
    DOMAIN_WIDE_SAML_IF_ENABLED("DOMAIN_WIDE_SAML_IF_ENABLED");

    public final String value;

    private InboundSsoAssignmentSsoModeEnum(String value) {
        this.value = value;
    }
}
