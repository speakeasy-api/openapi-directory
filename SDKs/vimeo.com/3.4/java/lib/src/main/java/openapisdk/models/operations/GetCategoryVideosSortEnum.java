package openapisdk.models.operations;


public enum GetCategoryVideosSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DURATION("duration"),
    FEATURED("featured"),
    LIKES("likes"),
    PLAYS("plays"),
    RELEVANT("relevant");

    public final String value;

    private GetCategoryVideosSortEnum(String value) {
        this.value = value;
    }
}
