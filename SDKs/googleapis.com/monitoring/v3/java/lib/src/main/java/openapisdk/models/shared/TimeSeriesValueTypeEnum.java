package openapisdk.models.shared;


public enum TimeSeriesValueTypeEnum {
    VALUE_TYPE_UNSPECIFIED("VALUE_TYPE_UNSPECIFIED"),
    BOOL("BOOL"),
    INT64("INT64"),
    DOUBLE("DOUBLE"),
    STRING("STRING"),
    DISTRIBUTION("DISTRIBUTION"),
    MONEY("MONEY");

    public final String value;

    private TimeSeriesValueTypeEnum(String value) {
        this.value = value;
    }
}
