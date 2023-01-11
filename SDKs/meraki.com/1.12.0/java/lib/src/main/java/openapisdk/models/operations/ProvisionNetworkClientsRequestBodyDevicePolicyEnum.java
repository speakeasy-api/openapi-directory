package openapisdk.models.operations;


public enum ProvisionNetworkClientsRequestBodyDevicePolicyEnum {
    GROUP_POLICY("Group policy"),
    ALLOWED("Allowed"),
    BLOCKED("Blocked"),
    PER_CONNECTION("Per connection"),
    NORMAL("Normal");

    public final String value;

    private ProvisionNetworkClientsRequestBodyDevicePolicyEnum(String value) {
        this.value = value;
    }
}
