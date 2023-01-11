package openapisdk.models.shared;


public enum BucketByTimePeriodTypeEnum {
    DAY("day"),
    WEEK("week"),
    MONTH("month");

    public final String value;

    private BucketByTimePeriodTypeEnum(String value) {
        this.value = value;
    }
}
