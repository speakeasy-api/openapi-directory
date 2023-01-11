package openapisdk.models.shared;


public enum AuthorTypeEnum {
    AUTHOR_TYPE_UNSPECIFIED("AUTHOR_TYPE_UNSPECIFIED"),
    REGULAR_USER("REGULAR_USER"),
    LOCAL_GUIDE("LOCAL_GUIDE"),
    MERCHANT("MERCHANT");

    public final String value;

    private AuthorTypeEnum(String value) {
        this.value = value;
    }
}
