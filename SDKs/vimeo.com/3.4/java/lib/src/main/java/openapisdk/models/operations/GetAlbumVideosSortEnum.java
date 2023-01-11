package openapisdk.models.operations;


public enum GetAlbumVideosSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DEFAULT_("default"),
    DURATION("duration"),
    LIKES("likes"),
    MANUAL("manual"),
    MODIFIED_TIME("modified_time"),
    PLAYS("plays");

    public final String value;

    private GetAlbumVideosSortEnum(String value) {
        this.value = value;
    }
}
