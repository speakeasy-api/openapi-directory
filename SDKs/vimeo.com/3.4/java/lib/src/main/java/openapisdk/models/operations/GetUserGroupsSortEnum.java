package openapisdk.models.operations;


public enum GetUserGroupsSortEnum {
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    MEMBERS("members"),
    VIDEOS("videos");

    public final String value;

    private GetUserGroupsSortEnum(String value) {
        this.value = value;
    }
}
