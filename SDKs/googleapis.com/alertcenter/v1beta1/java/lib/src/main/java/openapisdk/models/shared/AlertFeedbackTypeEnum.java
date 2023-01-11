package openapisdk.models.shared;


public enum AlertFeedbackTypeEnum {
    ALERT_FEEDBACK_TYPE_UNSPECIFIED("ALERT_FEEDBACK_TYPE_UNSPECIFIED"),
    NOT_USEFUL("NOT_USEFUL"),
    SOMEWHAT_USEFUL("SOMEWHAT_USEFUL"),
    VERY_USEFUL("VERY_USEFUL");

    public final String value;

    private AlertFeedbackTypeEnum(String value) {
        this.value = value;
    }
}
