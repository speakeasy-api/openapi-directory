package openapisdk.models.shared;


public enum QueryDataScopeEnum {
    DATA_SCOPE_UNSPECIFIED("DATA_SCOPE_UNSPECIFIED"),
    ALL_DATA("ALL_DATA"),
    HELD_DATA("HELD_DATA"),
    UNPROCESSED_DATA("UNPROCESSED_DATA");

    public final String value;

    private QueryDataScopeEnum(String value) {
        this.value = value;
    }
}
