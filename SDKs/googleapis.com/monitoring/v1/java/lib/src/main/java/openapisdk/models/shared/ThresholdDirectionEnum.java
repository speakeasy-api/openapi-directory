package openapisdk.models.shared;


public enum ThresholdDirectionEnum {
    DIRECTION_UNSPECIFIED("DIRECTION_UNSPECIFIED"),
    ABOVE("ABOVE"),
    BELOW("BELOW");

    public final String value;

    private ThresholdDirectionEnum(String value) {
        this.value = value;
    }
}
