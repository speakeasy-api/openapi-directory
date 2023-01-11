package openapisdk.models.shared;


public enum EntityMentionTypeEnum {
    TYPE_UNKNOWN("TYPE_UNKNOWN"),
    PROPER("PROPER"),
    COMMON("COMMON");

    public final String value;

    private EntityMentionTypeEnum(String value) {
        this.value = value;
    }
}
