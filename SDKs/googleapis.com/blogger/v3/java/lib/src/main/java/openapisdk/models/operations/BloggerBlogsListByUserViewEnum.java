package openapisdk.models.operations;


public enum BloggerBlogsListByUserViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerBlogsListByUserViewEnum(String value) {
        this.value = value;
    }
}
