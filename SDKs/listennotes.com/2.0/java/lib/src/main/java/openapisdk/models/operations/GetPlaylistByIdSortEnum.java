package openapisdk.models.operations;


public enum GetPlaylistByIdSortEnum {
    RECENT_ADDED_FIRST("recent_added_first"),
    OLDEST_ADDED_FIRST("oldest_added_first"),
    RECENT_PUBLISHED_FIRST("recent_published_first"),
    OLDEST_PUBLISHED_FIRST("oldest_published_first");

    public final String value;

    private GetPlaylistByIdSortEnum(String value) {
        this.value = value;
    }
}
