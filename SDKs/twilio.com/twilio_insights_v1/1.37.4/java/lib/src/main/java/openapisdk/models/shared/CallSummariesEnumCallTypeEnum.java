package openapisdk.models.shared;


public enum CallSummariesEnumCallTypeEnum {
    CARRIER("carrier"),
    SIP("sip"),
    TRUNKING("trunking"),
    CLIENT("client");

    public final String value;

    private CallSummariesEnumCallTypeEnum(String value) {
        this.value = value;
    }
}
