package openapisdk.models.shared;


public enum IpAddressRoleValueEnum {
    LOOPBACK("loopback"),
    SECONDARY("secondary"),
    ANYCAST("anycast"),
    VIP("vip"),
    VRRP("vrrp"),
    HSRP("hsrp"),
    GLBP("glbp"),
    CARP("carp");

    public final String value;

    private IpAddressRoleValueEnum(String value) {
        this.value = value;
    }
}
