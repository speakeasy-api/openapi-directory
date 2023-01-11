package openapisdk.models.operations;


public enum GetChannelsSortEnum {
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    FOLLOWERS("followers"),
    RELEVANT("relevant"),
    VIDEOS("videos");

    public final String value;

    private GetChannelsSortEnum(String value) {
        this.value = value;
    }
}
