package openapisdk.models.shared;


public enum EventObjectTypeEnum {
    USER("user"),
    TARGET("target"),
    SCAN("scan"),
    FINDING("finding");

    public final String value;

    private EventObjectTypeEnum(String value) {
        this.value = value;
    }
}
