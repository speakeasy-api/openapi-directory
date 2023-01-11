package openapisdk.models.shared;


public enum ListAssetsResultStateChangeEnum {
    UNUSED("UNUSED"),
    ADDED("ADDED"),
    REMOVED("REMOVED"),
    ACTIVE("ACTIVE");

    public final String value;

    private ListAssetsResultStateChangeEnum(String value) {
        this.value = value;
    }
}
