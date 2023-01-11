package openapisdk.models.shared;


public enum ObjectiveValueEnum {
    COMPLETION_TIME("completion_time"),
    TRANSPORT_TIME("transport_time"),
    VEHICLES("vehicles"),
    ACTIVITIES("activities");

    public final String value;

    private ObjectiveValueEnum(String value) {
        this.value = value;
    }
}
