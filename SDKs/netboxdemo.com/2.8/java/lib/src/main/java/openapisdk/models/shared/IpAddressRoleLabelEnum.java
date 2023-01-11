package openapisdk.models.shared;


public enum IpAddressRoleLabelEnum {
    LOOPBACK("Loopback"),
    SECONDARY("Secondary"),
    ANYCAST("Anycast"),
    VIP("VIP"),
    VRRP("VRRP"),
    HSRP("HSRP"),
    GLBP("GLBP"),
    CARP("CARP");

    public final String value;

    private IpAddressRoleLabelEnum(String value) {
        this.value = value;
    }
}
