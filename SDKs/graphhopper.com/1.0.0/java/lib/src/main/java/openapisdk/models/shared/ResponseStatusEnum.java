package openapisdk.models.shared;


public enum ResponseStatusEnum {
    WAITING_IN_QUEUE("waiting_in_queue"),
    PROCESSING("processing"),
    FINISHED("finished");

    public final String value;

    private ResponseStatusEnum(String value) {
        this.value = value;
    }
}
