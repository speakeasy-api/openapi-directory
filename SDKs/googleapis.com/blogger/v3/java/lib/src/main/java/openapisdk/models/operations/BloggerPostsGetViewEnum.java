package openapisdk.models.operations;


public enum BloggerPostsGetViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerPostsGetViewEnum(String value) {
        this.value = value;
    }
}
