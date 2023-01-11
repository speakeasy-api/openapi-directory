package openapisdk.models.shared;


public enum ProjectStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETE_REQUESTED("DELETE_REQUESTED");

    public final String value;

    private ProjectStateEnum(String value) {
        this.value = value;
    }
}
