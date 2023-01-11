package openapisdk.models.operations;


public enum BloggerPostsGetByPathViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerPostsGetByPathViewEnum(String value) {
        this.value = value;
    }
}
