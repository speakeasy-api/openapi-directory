package openapisdk.models.operations;


public enum GetUsersModeratorsSortEnum {
    REPUTATION("reputation"),
    CREATION("creation"),
    NAME("name"),
    MODIFIED("modified");

    public final String value;

    private GetUsersModeratorsSortEnum(String value) {
        this.value = value;
    }
}
