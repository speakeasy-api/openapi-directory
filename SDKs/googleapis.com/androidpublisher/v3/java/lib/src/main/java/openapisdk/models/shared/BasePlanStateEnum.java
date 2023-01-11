package openapisdk.models.shared;


public enum BasePlanStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    DRAFT("DRAFT"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE");

    public final String value;

    private BasePlanStateEnum(String value) {
        this.value = value;
    }
}
