package openapisdk.models.shared;


public enum EventTopicResourceTypeEnum {
    BLOBS("blobs"),
    ITEMS("items"),
    KEYS("keys"),
    KVPAIRS("kvpairs"),
    LOCATIONS("locations"),
    PRESENCES("presences"),
    SERVICES("services"),
    SPOTS("spots"),
    SUBSCRIPTIONS("subscriptions"),
    USERS("users");

    public final String value;

    private EventTopicResourceTypeEnum(String value) {
        this.value = value;
    }
}
