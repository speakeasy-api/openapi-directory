package openapisdk.models.shared;


public enum DeleteTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    TRASH("TRASH"),
    PERMANENT_DELETE("PERMANENT_DELETE");

    public final String value;

    private DeleteTypeEnum(String value) {
        this.value = value;
    }
}
