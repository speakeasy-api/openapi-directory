package openapisdk.models.shared;


public enum ChartOptionsModeEnum {
    MODE_UNSPECIFIED("MODE_UNSPECIFIED"),
    COLOR("COLOR"),
    X_RAY("X_RAY"),
    STATS("STATS");

    public final String value;

    private ChartOptionsModeEnum(String value) {
        this.value = value;
    }
}
