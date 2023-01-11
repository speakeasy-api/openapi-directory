package openapisdk.models.shared;


public enum TimePeriodUnitEnum {
    ANNUAL("annual"),
    MONTH("month"),
    SEMI_MONTHLY("semi-monthly");

    public final String value;

    private TimePeriodUnitEnum(String value) {
        this.value = value;
    }
}
