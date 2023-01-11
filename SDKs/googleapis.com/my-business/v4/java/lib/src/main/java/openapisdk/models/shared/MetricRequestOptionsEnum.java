package openapisdk.models.shared;


public enum MetricRequestOptionsEnum {
    METRIC_OPTION_UNSPECIFIED("METRIC_OPTION_UNSPECIFIED"),
    AGGREGATED_TOTAL("AGGREGATED_TOTAL"),
    AGGREGATED_DAILY("AGGREGATED_DAILY"),
    BREAKDOWN_DAY_OF_WEEK("BREAKDOWN_DAY_OF_WEEK"),
    BREAKDOWN_HOUR_OF_DAY("BREAKDOWN_HOUR_OF_DAY");

    public final String value;

    private MetricRequestOptionsEnum(String value) {
        this.value = value;
    }
}
