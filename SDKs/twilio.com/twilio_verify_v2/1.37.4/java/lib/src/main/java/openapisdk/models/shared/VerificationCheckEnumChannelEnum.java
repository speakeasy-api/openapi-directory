package openapisdk.models.shared;


public enum VerificationCheckEnumChannelEnum {
    SMS("sms"),
    CALL("call"),
    EMAIL("email"),
    WHATSAPP("whatsapp"),
    SNA("sna");

    public final String value;

    private VerificationCheckEnumChannelEnum(String value) {
        this.value = value;
    }
}
