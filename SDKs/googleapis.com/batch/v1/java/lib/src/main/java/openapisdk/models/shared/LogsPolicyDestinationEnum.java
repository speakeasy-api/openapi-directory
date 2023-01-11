package openapisdk.models.shared;


public enum LogsPolicyDestinationEnum {
    DESTINATION_UNSPECIFIED("DESTINATION_UNSPECIFIED"),
    CLOUD_LOGGING("CLOUD_LOGGING"),
    PATH("PATH");

    public final String value;

    private LogsPolicyDestinationEnum(String value) {
        this.value = value;
    }
}
