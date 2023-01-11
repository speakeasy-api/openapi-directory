package openapisdk.models.shared;


public enum TestIssueSeverityEnum {
    UNSPECIFIED_SEVERITY("unspecifiedSeverity"),
    INFO("info"),
    SUGGESTION("suggestion"),
    WARNING("warning"),
    SEVERE("severe");

    public final String value;

    private TestIssueSeverityEnum(String value) {
        this.value = value;
    }
}
