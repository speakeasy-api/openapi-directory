package openapisdk.models.shared;


public enum IpAddressStatusValueEnum {
    ACTIVE("active"),
    RESERVED("reserved"),
    DEPRECATED("deprecated"),
    DHCP("dhcp");

    public final String value;

    private IpAddressStatusValueEnum(String value) {
        this.value = value;
    }
}
