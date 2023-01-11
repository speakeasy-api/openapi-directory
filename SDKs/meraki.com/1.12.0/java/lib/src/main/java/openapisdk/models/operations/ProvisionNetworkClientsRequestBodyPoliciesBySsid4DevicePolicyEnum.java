package openapisdk.models.operations;


public enum ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum {
    ALLOWED("Allowed"),
    BLOCKED("Blocked"),
    NORMAL("Normal"),
    GROUP_POLICY("Group policy");

    public final String value;

    private ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum(String value) {
        this.value = value;
    }
}
