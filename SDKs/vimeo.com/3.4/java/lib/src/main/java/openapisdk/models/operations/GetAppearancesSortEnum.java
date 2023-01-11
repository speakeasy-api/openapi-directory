package openapisdk.models.operations;


public enum GetAppearancesSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DURATION("duration"),
    LIKES("likes"),
    PLAYS("plays");

    public final String value;

    private GetAppearancesSortEnum(String value) {
        this.value = value;
    }
}
