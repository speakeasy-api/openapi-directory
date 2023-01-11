package openapisdk.models.shared;


public enum ConditionValueRelativeDateEnum {
    RELATIVE_DATE_UNSPECIFIED("RELATIVE_DATE_UNSPECIFIED"),
    PAST_YEAR("PAST_YEAR"),
    PAST_MONTH("PAST_MONTH"),
    PAST_WEEK("PAST_WEEK"),
    YESTERDAY("YESTERDAY"),
    TODAY("TODAY"),
    TOMORROW("TOMORROW");

    public final String value;

    private ConditionValueRelativeDateEnum(String value) {
        this.value = value;
    }
}
