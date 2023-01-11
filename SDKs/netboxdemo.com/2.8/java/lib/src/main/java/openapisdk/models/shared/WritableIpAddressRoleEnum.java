package openapisdk.models.shared;


public enum WritableIpAddressRoleEnum {
    LOOPBACK("loopback"),
    SECONDARY("secondary"),
    ANYCAST("anycast"),
    VIP("vip"),
    VRRP("vrrp"),
    HSRP("hsrp"),
    GLBP("glbp"),
    CARP("carp");

    public final String value;

    private WritableIpAddressRoleEnum(String value) {
        this.value = value;
    }
}
