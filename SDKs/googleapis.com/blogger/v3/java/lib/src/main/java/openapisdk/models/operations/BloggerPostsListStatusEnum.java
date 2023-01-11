package openapisdk.models.operations;


public enum BloggerPostsListStatusEnum {
    LIVE("LIVE"),
    DRAFT("DRAFT"),
    SCHEDULED("SCHEDULED"),
    SOFT_TRASHED("SOFT_TRASHED");

    public final String value;

    private BloggerPostsListStatusEnum(String value) {
        this.value = value;
    }
}
