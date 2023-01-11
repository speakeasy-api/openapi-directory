package openapisdk.models.shared;


public enum ResourceUpdateIntentEnum {
    CREATE_OR_ACQUIRE("CREATE_OR_ACQUIRE"),
    DELETE("DELETE"),
    ACQUIRE("ACQUIRE"),
    UPDATE("UPDATE"),
    ABANDON("ABANDON"),
    CREATE("CREATE");

    public final String value;

    private ResourceUpdateIntentEnum(String value) {
        this.value = value;
    }
}
