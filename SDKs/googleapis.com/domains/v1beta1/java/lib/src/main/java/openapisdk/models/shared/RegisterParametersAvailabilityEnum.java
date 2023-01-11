package openapisdk.models.shared;


public enum RegisterParametersAvailabilityEnum {
    AVAILABILITY_UNSPECIFIED("AVAILABILITY_UNSPECIFIED"),
    AVAILABLE("AVAILABLE"),
    UNAVAILABLE("UNAVAILABLE"),
    UNSUPPORTED("UNSUPPORTED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private RegisterParametersAvailabilityEnum(String value) {
        this.value = value;
    }
}
