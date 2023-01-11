package openapisdk.models.shared;


public enum DateTimeRuleTypeEnum {
    DATE_TIME_RULE_TYPE_UNSPECIFIED("DATE_TIME_RULE_TYPE_UNSPECIFIED"),
    SECOND("SECOND"),
    MINUTE("MINUTE"),
    HOUR("HOUR"),
    HOUR_MINUTE("HOUR_MINUTE"),
    HOUR_MINUTE_AMPM("HOUR_MINUTE_AMPM"),
    DAY_OF_WEEK("DAY_OF_WEEK"),
    DAY_OF_YEAR("DAY_OF_YEAR"),
    DAY_OF_MONTH("DAY_OF_MONTH"),
    DAY_MONTH("DAY_MONTH"),
    MONTH("MONTH"),
    QUARTER("QUARTER"),
    YEAR("YEAR"),
    YEAR_MONTH("YEAR_MONTH"),
    YEAR_QUARTER("YEAR_QUARTER"),
    YEAR_MONTH_DAY("YEAR_MONTH_DAY");

    public final String value;

    private DateTimeRuleTypeEnum(String value) {
        this.value = value;
    }
}
