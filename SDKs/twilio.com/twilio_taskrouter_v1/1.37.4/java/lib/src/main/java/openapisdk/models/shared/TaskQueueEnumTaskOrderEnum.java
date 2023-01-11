package openapisdk.models.shared;


public enum TaskQueueEnumTaskOrderEnum {
    FIFO("FIFO"),
    LIFO("LIFO");

    public final String value;

    private TaskQueueEnumTaskOrderEnum(String value) {
        this.value = value;
    }
}
