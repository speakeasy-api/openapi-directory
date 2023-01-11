package openapisdk.models.operations;


public enum ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum {
    ALLOWED("Allowed"),
    BLOCKED("Blocked"),
    NORMAL("Normal"),
    GROUP_POLICY("Group policy");

    public final String value;

    private ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum(String value) {
        this.value = value;
    }
}
