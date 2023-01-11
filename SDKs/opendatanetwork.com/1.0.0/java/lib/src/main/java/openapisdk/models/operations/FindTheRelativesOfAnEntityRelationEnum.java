package openapisdk.models.operations;


public enum FindTheRelativesOfAnEntityRelationEnum {
    PARENT("parent"),
    CHILD("child"),
    SIBLING("sibling"),
    PEER("peer");

    public final String value;

    private FindTheRelativesOfAnEntityRelationEnum(String value) {
        this.value = value;
    }
}
