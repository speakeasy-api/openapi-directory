package openapisdk.models.shared;


public enum PackageIssueEffectiveSeverityEnum {
    SEVERITY_UNSPECIFIED("SEVERITY_UNSPECIFIED"),
    MINIMAL("MINIMAL"),
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH"),
    CRITICAL("CRITICAL");

    public final String value;

    private PackageIssueEffectiveSeverityEnum(String value) {
        this.value = value;
    }
}
