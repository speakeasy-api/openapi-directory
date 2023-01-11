package openapisdk.models.shared;


public enum RedactTransactionProductEnum {
    SMS("sms"),
    VOICE("voice"),
    NUMBER_INSIGHT("number-insight"),
    VERIFY("verify"),
    VERIFY_SDK("verify-sdk"),
    MESSAGES("messages");

    public final String value;

    private RedactTransactionProductEnum(String value) {
        this.value = value;
    }
}
