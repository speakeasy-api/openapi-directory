package openapisdk.models.shared;


public enum GoogleCloudRunV2TrafficTargetTypeEnum {
    TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED("TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"),
    TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST("TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"),
    TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION("TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION");

    public final String value;

    private GoogleCloudRunV2TrafficTargetTypeEnum(String value) {
        this.value = value;
    }
}
