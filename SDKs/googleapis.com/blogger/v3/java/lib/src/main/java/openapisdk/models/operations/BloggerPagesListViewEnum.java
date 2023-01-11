package openapisdk.models.operations;


public enum BloggerPagesListViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerPagesListViewEnum(String value) {
        this.value = value;
    }
}
