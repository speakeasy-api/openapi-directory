package openapisdk.models.shared;


public enum MemberRelationRelationTypeEnum {
    RELATION_TYPE_UNSPECIFIED("RELATION_TYPE_UNSPECIFIED"),
    DIRECT("DIRECT"),
    INDIRECT("INDIRECT"),
    DIRECT_AND_INDIRECT("DIRECT_AND_INDIRECT");

    public final String value;

    private MemberRelationRelationTypeEnum(String value) {
        this.value = value;
    }
}
