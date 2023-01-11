package openapisdk.models.shared;


public enum CommentStatusEnum {
    LIVE("LIVE"),
    EMPTIED("EMPTIED"),
    PENDING("PENDING"),
    SPAM("SPAM");

    public final String value;

    private CommentStatusEnum(String value) {
        this.value = value;
    }
}
