package openapisdk.models.operations;


public enum GetMeSortEnum {
    REPUTATION("reputation"),
    CREATION("creation"),
    NAME("name"),
    MODIFIED("modified");

    public final String value;

    private GetMeSortEnum(String value) {
        this.value = value;
    }
}
