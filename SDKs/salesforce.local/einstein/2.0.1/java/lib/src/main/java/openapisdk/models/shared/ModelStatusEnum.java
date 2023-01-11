package openapisdk.models.shared;


public enum ModelStatusEnum {
    QUEUED("QUEUED"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    KILLED("KILLED"),
    FAILED_WITH_RETRIES("FAILED_WITH_RETRIES");

    public final String value;

    private ModelStatusEnum(String value) {
        this.value = value;
    }
}
