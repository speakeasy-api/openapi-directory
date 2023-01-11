package openapisdk.models.operations;


public enum BloggerPostUserInfosListViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    public final String value;

    private BloggerPostUserInfosListViewEnum(String value) {
        this.value = value;
    }
}
