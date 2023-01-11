package openapisdk.models.operations;


public enum GetUsersIdsSortEnum {
    REPUTATION("reputation"),
    CREATION("creation"),
    NAME("name"),
    MODIFIED("modified");

    public final String value;

    private GetUsersIdsSortEnum(String value) {
        this.value = value;
    }
}
