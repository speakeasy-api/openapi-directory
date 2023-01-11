package openapisdk.models.shared;


public enum FilterSetTimeSeriesGranularityEnum {
    TIME_SERIES_GRANULARITY_UNSPECIFIED("TIME_SERIES_GRANULARITY_UNSPECIFIED"),
    HOURLY("HOURLY"),
    DAILY("DAILY");

    public final String value;

    private FilterSetTimeSeriesGranularityEnum(String value) {
        this.value = value;
    }
}
