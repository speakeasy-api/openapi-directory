package openapisdk.models.operations;


public enum ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum {
    ALLOWED("Allowed"),
    BLOCKED("Blocked"),
    NORMAL("Normal"),
    GROUP_POLICY("Group policy");

    public final String value;

    private ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum(String value) {
        this.value = value;
    }
}
