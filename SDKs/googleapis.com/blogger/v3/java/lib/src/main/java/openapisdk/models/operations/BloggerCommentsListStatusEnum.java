package openapisdk.models.operations;


public enum BloggerCommentsListStatusEnum {
    LIVE("LIVE"),
    EMPTIED("EMPTIED"),
    PENDING("PENDING"),
    SPAM("SPAM");

    public final String value;

    private BloggerCommentsListStatusEnum(String value) {
        this.value = value;
    }
}
