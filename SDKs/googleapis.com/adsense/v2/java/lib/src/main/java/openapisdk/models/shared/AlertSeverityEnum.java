package openapisdk.models.shared;


public enum AlertSeverityEnum {
    SEVERITY_UNSPECIFIED("SEVERITY_UNSPECIFIED"),
    INFO("INFO"),
    WARNING("WARNING"),
    SEVERE("SEVERE");

    public final String value;

    private AlertSeverityEnum(String value) {
        this.value = value;
    }
}
