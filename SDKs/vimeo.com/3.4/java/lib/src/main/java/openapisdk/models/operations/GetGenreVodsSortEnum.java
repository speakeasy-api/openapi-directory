package openapisdk.models.operations;


public enum GetGenreVodsSortEnum {
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    NAME("name"),
    PUBLISH_TIME("publish.time"),
    VIDEOS("videos");

    public final String value;

    private GetGenreVodsSortEnum(String value) {
        this.value = value;
    }
}
