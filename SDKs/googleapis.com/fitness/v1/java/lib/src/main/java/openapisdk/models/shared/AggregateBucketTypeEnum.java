package openapisdk.models.shared;


public enum AggregateBucketTypeEnum {
    UNKNOWN("unknown"),
    TIME("time"),
    SESSION("session"),
    ACTIVITY_TYPE("activityType"),
    ACTIVITY_SEGMENT("activitySegment");

    public final String value;

    private AggregateBucketTypeEnum(String value) {
        this.value = value;
    }
}
