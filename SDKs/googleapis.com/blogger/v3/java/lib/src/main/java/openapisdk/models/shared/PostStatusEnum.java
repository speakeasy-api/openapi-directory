package openapisdk.models.shared;


public enum PostStatusEnum {
    LIVE("LIVE"),
    DRAFT("DRAFT"),
    SCHEDULED("SCHEDULED"),
    SOFT_TRASHED("SOFT_TRASHED");

    public final String value;

    private PostStatusEnum(String value) {
        this.value = value;
    }
}
