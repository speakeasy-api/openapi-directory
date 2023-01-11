package openapisdk.models.operations;


public enum UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum {
    ALL_ORGANIZATION_ADMINS("All organization admins"),
    ALL_ENTERPRISE_ADMINS("All enterprise admins"),
    ALL_NETWORK_ADMINS("All network admins"),
    ALL_ADMINS_OF_NETWORKS("All admins of networks..."),
    ALL_ADMINS_OF_NETWORKS_TAGGED("All admins of networks tagged..."),
    SPECIFIC_ADMINS("Specific admins..."),
    ALL_ADMINS("All admins"),
    ALL_SAML_ADMINS("All SAML admins");

    public final String value;

    private UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum(String value) {
        this.value = value;
    }
}
