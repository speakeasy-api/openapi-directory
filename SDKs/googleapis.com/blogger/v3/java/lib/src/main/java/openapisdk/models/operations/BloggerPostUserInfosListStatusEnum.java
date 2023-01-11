package openapisdk.models.operations;


public enum BloggerPostUserInfosListStatusEnum {
    LIVE("LIVE"),
    DRAFT("DRAFT"),
    SCHEDULED("SCHEDULED"),
    SOFT_TRASHED("SOFT_TRASHED");

    public final String value;

    private BloggerPostUserInfosListStatusEnum(String value) {
        this.value = value;
    }
}
