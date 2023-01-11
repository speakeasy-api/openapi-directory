package openapisdk.models.shared;


public enum AliasContextKindEnum {
    KIND_UNSPECIFIED("KIND_UNSPECIFIED"),
    FIXED("FIXED"),
    MOVABLE("MOVABLE"),
    OTHER("OTHER");

    public final String value;

    private AliasContextKindEnum(String value) {
        this.value = value;
    }
}
