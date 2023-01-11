package openapisdk.models.shared;


public enum PathQueryOptionsFilterMatchEnum {
    UNKNOWN("UNKNOWN"),
    EXACT("EXACT"),
    PARTIAL("PARTIAL"),
    BEGINS_WITH("BEGINS_WITH"),
    WILDCARD_EXPRESSION("WILDCARD_EXPRESSION");

    public final String value;

    private PathQueryOptionsFilterMatchEnum(String value) {
        this.value = value;
    }
}
