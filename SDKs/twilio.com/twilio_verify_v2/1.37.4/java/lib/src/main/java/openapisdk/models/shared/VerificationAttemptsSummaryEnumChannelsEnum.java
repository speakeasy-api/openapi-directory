package openapisdk.models.shared;


public enum VerificationAttemptsSummaryEnumChannelsEnum {
    SMS("sms"),
    CALL("call"),
    EMAIL("email"),
    WHATSAPP("whatsapp");

    public final String value;

    private VerificationAttemptsSummaryEnumChannelsEnum(String value) {
        this.value = value;
    }
}
