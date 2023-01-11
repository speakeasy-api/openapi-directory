package openapisdk.models.operations;


public enum UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum {
    OPEN("Open"),
    CUSTOM_ACCESS_POLICY("Custom access policy"),
    MAC_ALLOW_LIST("MAC allow list"),
    STICKY_MAC_ALLOW_LIST("Sticky MAC allow list");

    public final String value;

    private UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum(String value) {
        this.value = value;
    }
}
