package openapisdk.models.shared;


public enum FindingsSeverityEnum {
    INFO("info"),
    LOW("low"),
    MEDIUM("medium"),
    HIGH("high");

    public final String value;

    private FindingsSeverityEnum(String value) {
        this.value = value;
    }
}
