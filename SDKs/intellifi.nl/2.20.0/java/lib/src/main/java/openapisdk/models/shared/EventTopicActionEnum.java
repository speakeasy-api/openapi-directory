package openapisdk.models.shared;


public enum EventTopicActionEnum {
    CREATED("created"),
    UPDATED("updated"),
    DELETED("deleted"),
    DISAPPEARED("disappeared"),
    CONNECTION_RSSI_CHANGED("connection-rssi-changed");

    public final String value;

    private EventTopicActionEnum(String value) {
        this.value = value;
    }
}
