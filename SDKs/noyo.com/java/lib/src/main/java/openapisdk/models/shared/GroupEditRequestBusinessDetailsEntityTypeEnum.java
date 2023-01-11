package openapisdk.models.shared;


public enum GroupEditRequestBusinessDetailsEntityTypeEnum {
    C_CORP("c_corp"),
    LLC("llc"),
    LLP("llp"),
    PARTNERSHIP("partnership"),
    S_CORP("s_corp");

    public final String value;

    private GroupEditRequestBusinessDetailsEntityTypeEnum(String value) {
        this.value = value;
    }
}
