package openapisdk.models.shared;


public enum IpAddressStatusLabelEnum {
    ACTIVE("Active"),
    RESERVED("Reserved"),
    DEPRECATED("Deprecated"),
    DHCP("DHCP");

    public final String value;

    private IpAddressStatusLabelEnum(String value) {
        this.value = value;
    }
}
