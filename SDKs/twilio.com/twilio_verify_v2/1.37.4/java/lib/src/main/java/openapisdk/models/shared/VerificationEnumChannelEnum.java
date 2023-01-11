package openapisdk.models.shared;


public enum VerificationEnumChannelEnum {
    SMS("sms"),
    CALL("call"),
    EMAIL("email"),
    WHATSAPP("whatsapp"),
    SNA("sna");

    public final String value;

    private VerificationEnumChannelEnum(String value) {
        this.value = value;
    }
}
