package openapisdk.models.operations;


public enum GetProjectsSortEnum {
    DATE("date"),
    DEFAULT_("default"),
    MODIFIED_TIME("modified_time"),
    NAME("name");

    public final String value;

    private GetProjectsSortEnum(String value) {
        this.value = value;
    }
}
