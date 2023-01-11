package openapisdk.models.operations;


public enum GetUsersSortEnum {
    REPUTATION("reputation"),
    CREATION("creation"),
    NAME("name"),
    MODIFIED("modified");

    public final String value;

    private GetUsersSortEnum(String value) {
        this.value = value;
    }
}
