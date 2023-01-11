package openapisdk.models.operations;


public enum GetGroupVideosSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DURATION("duration"),
    LIKES("likes"),
    PLAYS("plays");

    public final String value;

    private GetGroupVideosSortEnum(String value) {
        this.value = value;
    }
}
