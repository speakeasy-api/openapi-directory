package openapisdk.models.operations;


public enum BloggerCommentsGetViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerCommentsGetViewEnum(String value) {
        this.value = value;
    }
}
