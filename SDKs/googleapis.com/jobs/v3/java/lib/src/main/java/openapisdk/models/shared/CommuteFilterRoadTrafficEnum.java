package openapisdk.models.shared;


public enum CommuteFilterRoadTrafficEnum {
    ROAD_TRAFFIC_UNSPECIFIED("ROAD_TRAFFIC_UNSPECIFIED"),
    TRAFFIC_FREE("TRAFFIC_FREE"),
    BUSY_HOUR("BUSY_HOUR");

    public final String value;

    private CommuteFilterRoadTrafficEnum(String value) {
        this.value = value;
    }
}
