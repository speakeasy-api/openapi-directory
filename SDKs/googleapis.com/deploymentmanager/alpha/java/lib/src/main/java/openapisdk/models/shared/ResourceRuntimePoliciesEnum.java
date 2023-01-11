package openapisdk.models.shared;


public enum ResourceRuntimePoliciesEnum {
    CREATE("CREATE"),
    DELETE("DELETE"),
    UPDATE_ON_CHANGE("UPDATE_ON_CHANGE"),
    UPDATE_ALWAYS("UPDATE_ALWAYS");

    public final String value;

    private ResourceRuntimePoliciesEnum(String value) {
        this.value = value;
    }
}
