package openapisdk.models.shared;


public enum OrganizationStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETE_REQUESTED("DELETE_REQUESTED");

    public final String value;

    private OrganizationStateEnum(String value) {
        this.value = value;
    }
}
