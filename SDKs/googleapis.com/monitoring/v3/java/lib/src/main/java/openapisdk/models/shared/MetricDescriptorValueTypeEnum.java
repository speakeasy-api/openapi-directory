package openapisdk.models.shared;


public enum MetricDescriptorValueTypeEnum {
    VALUE_TYPE_UNSPECIFIED("VALUE_TYPE_UNSPECIFIED"),
    BOOL("BOOL"),
    INT64("INT64"),
    DOUBLE("DOUBLE"),
    STRING("STRING"),
    DISTRIBUTION("DISTRIBUTION"),
    MONEY("MONEY");

    public final String value;

    private MetricDescriptorValueTypeEnum(String value) {
        this.value = value;
    }
}
