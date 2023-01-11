package openapisdk.models.operations;


public enum TriggerCallbackActionTypeEnum {
    TRANSLATED("translated"),
    PROOFREAD("proofread"),
    COMPLETED("completed");

    public final String value;

    private TriggerCallbackActionTypeEnum(String value) {
        this.value = value;
    }
}
