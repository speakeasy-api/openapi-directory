package openapisdk.models.shared;


public enum TaskStatusEnum {
    OK("ok"),
    WARN("warn"),
    UNCHANGED("unchanged"),
    ERROR("error");

    public final String value;

    private TaskStatusEnum(String value) {
        this.value = value;
    }
}
