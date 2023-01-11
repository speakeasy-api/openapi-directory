package openapisdk.models.operations;


public enum GetEventsEventTypeEnum {
    CONSTRUCTION("CONSTRUCTION"),
    SPECIAL_EVENT("SPECIAL_EVENT"),
    INCIDENT("INCIDENT"),
    WEATHER_CONDITION("WEATHER_CONDITION"),
    ROAD_CONDITION("ROAD_CONDITION");

    public final String value;

    private GetEventsEventTypeEnum(String value) {
        this.value = value;
    }
}
