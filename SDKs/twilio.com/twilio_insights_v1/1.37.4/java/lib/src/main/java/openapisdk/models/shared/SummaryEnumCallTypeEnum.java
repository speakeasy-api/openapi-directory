package openapisdk.models.shared;


public enum SummaryEnumCallTypeEnum {
    CARRIER("carrier"),
    SIP("sip"),
    TRUNKING("trunking"),
    CLIENT("client");

    public final String value;

    private SummaryEnumCallTypeEnum(String value) {
        this.value = value;
    }
}
