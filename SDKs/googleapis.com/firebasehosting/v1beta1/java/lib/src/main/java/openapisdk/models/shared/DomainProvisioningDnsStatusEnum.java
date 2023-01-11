package openapisdk.models.shared;


public enum DomainProvisioningDnsStatusEnum {
    DNS_STATUS_UNSPECIFIED("DNS_STATUS_UNSPECIFIED"),
    DNS_PENDING("DNS_PENDING"),
    DNS_MISSING("DNS_MISSING"),
    DNS_PARTIAL_MATCH("DNS_PARTIAL_MATCH"),
    DNS_MATCH("DNS_MATCH"),
    DNS_EXTRANEOUS_MATCH("DNS_EXTRANEOUS_MATCH");

    public final String value;

    private DomainProvisioningDnsStatusEnum(String value) {
        this.value = value;
    }
}
