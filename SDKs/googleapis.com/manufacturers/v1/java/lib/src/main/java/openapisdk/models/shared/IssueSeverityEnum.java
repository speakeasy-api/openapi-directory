package openapisdk.models.shared;


public enum IssueSeverityEnum {
    SEVERITY_UNSPECIFIED("SEVERITY_UNSPECIFIED"),
    ERROR("ERROR"),
    WARNING("WARNING"),
    INFO("INFO");

    public final String value;

    private IssueSeverityEnum(String value) {
        this.value = value;
    }
}
