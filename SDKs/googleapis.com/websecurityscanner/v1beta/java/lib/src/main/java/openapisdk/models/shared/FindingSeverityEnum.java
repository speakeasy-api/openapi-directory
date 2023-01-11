package openapisdk.models.shared;


public enum FindingSeverityEnum {
    SEVERITY_UNSPECIFIED("SEVERITY_UNSPECIFIED"),
    CRITICAL("CRITICAL"),
    HIGH("HIGH"),
    MEDIUM("MEDIUM"),
    LOW("LOW");

    public final String value;

    private FindingSeverityEnum(String value) {
        this.value = value;
    }
}
