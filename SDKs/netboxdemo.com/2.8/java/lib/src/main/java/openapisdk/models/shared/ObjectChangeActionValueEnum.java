package openapisdk.models.shared;


public enum ObjectChangeActionValueEnum {
    CREATE("create"),
    UPDATE("update"),
    DELETE("delete");

    public final String value;

    private ObjectChangeActionValueEnum(String value) {
        this.value = value;
    }
}
