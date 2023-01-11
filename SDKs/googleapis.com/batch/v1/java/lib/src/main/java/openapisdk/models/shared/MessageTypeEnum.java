package openapisdk.models.shared;


public enum MessageTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    JOB_STATE_CHANGED("JOB_STATE_CHANGED"),
    TASK_STATE_CHANGED("TASK_STATE_CHANGED");

    public final String value;

    private MessageTypeEnum(String value) {
        this.value = value;
    }
}
