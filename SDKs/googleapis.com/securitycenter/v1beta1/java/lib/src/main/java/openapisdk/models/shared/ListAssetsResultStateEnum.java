package openapisdk.models.shared;


public enum ListAssetsResultStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    UNUSED("UNUSED"),
    ADDED("ADDED"),
    REMOVED("REMOVED"),
    ACTIVE("ACTIVE");

    public final String value;

    private ListAssetsResultStateEnum(String value) {
        this.value = value;
    }
}
