package openapisdk.models.shared;


public enum EndpointSeverityEnum {
    SEVERITY_UNSPECIFIED("SEVERITY_UNSPECIFIED"),
    INFORMATIONAL("INFORMATIONAL"),
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH"),
    CRITICAL("CRITICAL");

    public final String value;

    private EndpointSeverityEnum(String value) {
        this.value = value;
    }
}
