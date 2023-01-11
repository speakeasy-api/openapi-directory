package openapisdk.models.shared;


public enum ClusterResponseStatusEnum {
    WAITING_IN_QUEUE("waiting_in_queue"),
    PROCESSING("processing"),
    FINISHED("finished");

    public final String value;

    private ClusterResponseStatusEnum(String value) {
        this.value = value;
    }
}
