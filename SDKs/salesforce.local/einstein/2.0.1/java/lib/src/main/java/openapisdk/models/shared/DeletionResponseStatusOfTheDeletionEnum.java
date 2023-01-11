package openapisdk.models.shared;


public enum DeletionResponseStatusOfTheDeletionEnum {
    QUEUED("QUEUED"),
    RUNNING("RUNNING"),
    SUCCEEDED_WAITING_FOR_CACHE_REMOVAL("SUCCEEDED_WAITING_FOR_CACHE_REMOVAL"),
    SUCCEEDED("SUCCEEDED"),
    KILLED("KILLED"),
    FAILED("FAILED"),
    RETRY("RETRY");

    public final String value;

    private DeletionResponseStatusOfTheDeletionEnum(String value) {
        this.value = value;
    }
}
