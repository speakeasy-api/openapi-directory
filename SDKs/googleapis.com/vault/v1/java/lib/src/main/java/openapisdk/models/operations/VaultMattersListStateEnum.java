package openapisdk.models.operations;


public enum VaultMattersListStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    OPEN("OPEN"),
    CLOSED("CLOSED"),
    DELETED("DELETED");

    public final String value;

    private VaultMattersListStateEnum(String value) {
        this.value = value;
    }
}
