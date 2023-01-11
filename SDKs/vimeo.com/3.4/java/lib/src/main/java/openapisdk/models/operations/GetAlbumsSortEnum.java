package openapisdk.models.operations;


public enum GetAlbumsSortEnum {
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    DURATION("duration"),
    VIDEOS("videos");

    public final String value;

    private GetAlbumsSortEnum(String value) {
        this.value = value;
    }
}
