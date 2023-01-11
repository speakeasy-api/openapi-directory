package openapisdk.models.shared;


public enum GroupResultBusinessDetailsEntityTypeEnum {
    C_CORP("c_corp"),
    LLC("llc"),
    LLP("llp"),
    PARTNERSHIP("partnership"),
    S_CORP("s_corp");

    public final String value;

    private GroupResultBusinessDetailsEntityTypeEnum(String value) {
        this.value = value;
    }
}
