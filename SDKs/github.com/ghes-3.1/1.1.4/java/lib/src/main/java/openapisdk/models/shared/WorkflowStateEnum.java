package openapisdk.models.shared;


public enum WorkflowStateEnum {
    ACTIVE("active"),
    DELETED("deleted"),
    DISABLED_FORK("disabled_fork"),
    DISABLED_INACTIVITY("disabled_inactivity"),
    DISABLED_MANUALLY("disabled_manually");

    public final String value;

    private WorkflowStateEnum(String value) {
        this.value = value;
    }
}
