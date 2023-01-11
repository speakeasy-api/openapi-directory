package openapisdk.models.shared;


public enum GroupCreateRequestBusinessDetailsEntityTypeEnum {
    C_CORP("c_corp"),
    LLC("llc"),
    LLP("llp"),
    PARTNERSHIP("partnership"),
    S_CORP("s_corp");

    public final String value;

    private GroupCreateRequestBusinessDetailsEntityTypeEnum(String value) {
        this.value = value;
    }
}
