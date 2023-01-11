package openapisdk.models.shared;


public enum PathReportDimensionValueMatchTypeEnum {
    EXACT("EXACT"),
    BEGINS_WITH("BEGINS_WITH"),
    CONTAINS("CONTAINS"),
    WILDCARD_EXPRESSION("WILDCARD_EXPRESSION");

    public final String value;

    private PathReportDimensionValueMatchTypeEnum(String value) {
        this.value = value;
    }
}
