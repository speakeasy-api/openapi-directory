package openapisdk.models.shared;


public enum GroupRelationRelationTypeEnum {
    RELATION_TYPE_UNSPECIFIED("RELATION_TYPE_UNSPECIFIED"),
    DIRECT("DIRECT"),
    INDIRECT("INDIRECT"),
    DIRECT_AND_INDIRECT("DIRECT_AND_INDIRECT");

    public final String value;

    private GroupRelationRelationTypeEnum(String value) {
        this.value = value;
    }
}
