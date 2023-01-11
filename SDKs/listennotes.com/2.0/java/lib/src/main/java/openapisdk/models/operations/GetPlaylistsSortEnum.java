package openapisdk.models.operations;


public enum GetPlaylistsSortEnum {
    RECENT_ADDED_FIRST("recent_added_first"),
    OLDEST_ADDED_FIRST("oldest_added_first"),
    NAME_A_TO_Z("name_a_to_z"),
    NAME_Z_TO_A("name_z_to_a");

    public final String value;

    private GetPlaylistsSortEnum(String value) {
        this.value = value;
    }
}
