package openapisdk.models.operations;


public enum BloggerCommentsListByBlogStatusEnum {
    LIVE("LIVE"),
    EMPTIED("EMPTIED"),
    PENDING("PENDING"),
    SPAM("SPAM");

    public final String value;

    private BloggerCommentsListByBlogStatusEnum(String value) {
        this.value = value;
    }
}
