package openapisdk.models.operations;


public enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ANY("any");

    public final String value;

    private CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum(String value) {
        this.value = value;
    }
}
