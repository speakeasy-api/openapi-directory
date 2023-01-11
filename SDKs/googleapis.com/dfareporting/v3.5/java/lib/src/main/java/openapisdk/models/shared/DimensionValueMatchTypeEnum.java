package openapisdk.models.shared;


public enum DimensionValueMatchTypeEnum {
    EXACT("EXACT"),
    BEGINS_WITH("BEGINS_WITH"),
    CONTAINS("CONTAINS"),
    WILDCARD_EXPRESSION("WILDCARD_EXPRESSION");

    public final String value;

    private DimensionValueMatchTypeEnum(String value) {
        this.value = value;
    }
}
