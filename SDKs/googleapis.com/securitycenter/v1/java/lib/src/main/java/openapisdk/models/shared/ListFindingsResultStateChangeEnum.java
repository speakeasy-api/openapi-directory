package openapisdk.models.shared;


public enum ListFindingsResultStateChangeEnum {
    UNUSED("UNUSED"),
    CHANGED("CHANGED"),
    UNCHANGED("UNCHANGED"),
    ADDED("ADDED"),
    REMOVED("REMOVED");

    public final String value;

    private ListFindingsResultStateChangeEnum(String value) {
        this.value = value;
    }
}
