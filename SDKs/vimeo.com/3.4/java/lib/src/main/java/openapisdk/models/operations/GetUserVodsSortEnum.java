package openapisdk.models.operations;


public enum GetUserVodsSortEnum {
    ADDED("added"),
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    MODIFIED_TIME("modified_time"),
    NAME("name"),
    PUBLISH_TIME("publish.time"),
    RATING("rating");

    public final String value;

    private GetUserVodsSortEnum(String value) {
        this.value = value;
    }
}
