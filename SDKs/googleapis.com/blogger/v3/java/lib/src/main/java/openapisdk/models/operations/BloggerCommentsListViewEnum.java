package openapisdk.models.operations;


public enum BloggerCommentsListViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerCommentsListViewEnum(String value) {
        this.value = value;
    }
}
