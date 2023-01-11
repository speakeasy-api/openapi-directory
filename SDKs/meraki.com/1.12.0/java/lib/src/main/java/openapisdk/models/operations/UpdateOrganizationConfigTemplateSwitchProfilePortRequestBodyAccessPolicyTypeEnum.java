package openapisdk.models.operations;


public enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum {
    OPEN("Open"),
    CUSTOM_ACCESS_POLICY("Custom access policy"),
    MAC_ALLOW_LIST("MAC allow list"),
    STICKY_MAC_ALLOW_LIST("Sticky MAC allow list");

    public final String value;

    private UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum(String value) {
        this.value = value;
    }
}
