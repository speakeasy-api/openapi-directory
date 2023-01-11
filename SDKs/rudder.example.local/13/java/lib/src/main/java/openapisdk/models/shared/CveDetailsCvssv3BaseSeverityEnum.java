package openapisdk.models.shared;


public enum CveDetailsCvssv3BaseSeverityEnum {
    CRITICAL("critical"),
    HIGH("high"),
    MEDIUM("medium"),
    LOW("low"),
    NONE("none");

    public final String value;

    private CveDetailsCvssv3BaseSeverityEnum(String value) {
        this.value = value;
    }
}
