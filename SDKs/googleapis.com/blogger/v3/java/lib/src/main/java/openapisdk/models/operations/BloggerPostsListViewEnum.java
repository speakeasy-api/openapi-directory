package openapisdk.models.operations;


public enum BloggerPostsListViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerPostsListViewEnum(String value) {
        this.value = value;
    }
}
