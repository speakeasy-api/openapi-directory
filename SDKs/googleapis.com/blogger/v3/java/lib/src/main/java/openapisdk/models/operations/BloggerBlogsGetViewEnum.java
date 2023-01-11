package openapisdk.models.operations;


public enum BloggerBlogsGetViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerBlogsGetViewEnum(String value) {
        this.value = value;
    }
}
