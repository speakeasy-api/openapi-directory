package openapisdk.models.operations;


public enum GetGroupsSortEnum {
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    FOLLOWERS("followers"),
    RELEVANT("relevant"),
    VIDEOS("videos");

    public final String value;

    private GetGroupsSortEnum(String value) {
        this.value = value;
    }
}
