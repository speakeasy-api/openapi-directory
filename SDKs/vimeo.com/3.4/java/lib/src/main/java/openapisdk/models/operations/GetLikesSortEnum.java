package openapisdk.models.operations;


public enum GetLikesSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DURATION("duration"),
    LIKES("likes"),
    PLAYS("plays");

    public final String value;

    private GetLikesSortEnum(String value) {
        this.value = value;
    }
}
