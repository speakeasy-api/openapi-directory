package openapisdk.models.shared;


public enum WritableIpAddressStatusEnum {
    ACTIVE("active"),
    RESERVED("reserved"),
    DEPRECATED("deprecated"),
    DHCP("dhcp");

    public final String value;

    private WritableIpAddressStatusEnum(String value) {
        this.value = value;
    }
}
