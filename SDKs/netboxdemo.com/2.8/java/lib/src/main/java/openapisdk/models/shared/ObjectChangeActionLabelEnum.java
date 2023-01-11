package openapisdk.models.shared;


public enum ObjectChangeActionLabelEnum {
    CREATED("Created"),
    UPDATED("Updated"),
    DELETED("Deleted");

    public final String value;

    private ObjectChangeActionLabelEnum(String value) {
        this.value = value;
    }
}
