package openapisdk.models.operations;


public enum UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ANY("any");

    public final String value;

    private UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum(String value) {
        this.value = value;
    }
}
