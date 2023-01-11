package openapisdk.models.shared;


public enum VariableStateEnum {
    VARIABLE_STATE_UNSPECIFIED("VARIABLE_STATE_UNSPECIFIED"),
    UPDATED("UPDATED"),
    DELETED("DELETED");

    public final String value;

    private VariableStateEnum(String value) {
        this.value = value;
    }
}
