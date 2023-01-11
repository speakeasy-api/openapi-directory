package openapisdk.models.shared;


public enum LintResultSeverityEnum {
    SEVERITY_UNSPECIFIED("SEVERITY_UNSPECIFIED"),
    ERROR("ERROR"),
    WARNING("WARNING"),
    NOTICE("NOTICE"),
    INFO("INFO"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private LintResultSeverityEnum(String value) {
        this.value = value;
    }
}
