package openapisdk.models.shared;


public enum VerificationAttemptEnumChannelsEnum {
    SMS("sms"),
    CALL("call"),
    EMAIL("email"),
    WHATSAPP("whatsapp");

    public final String value;

    private VerificationAttemptEnumChannelsEnum(String value) {
        this.value = value;
    }
}
