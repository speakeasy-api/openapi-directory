package openapisdk.models.operations;


public enum EditAlbumRequestBodySortEnum {
    ADDED_FIRST("added_first"),
    ADDED_LAST("added_last"),
    ALPHABETICAL("alphabetical"),
    ARRANGED("arranged"),
    COMMENTS("comments"),
    LIKES("likes"),
    NEWEST("newest"),
    OLDEST("oldest"),
    PLAYS("plays");

    public final String value;

    private EditAlbumRequestBodySortEnum(String value) {
        this.value = value;
    }
}
