package openapisdk.models.operations;


public enum MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum {
    ALIGN_NONE("ALIGN_NONE"),
    ALIGN_DELTA("ALIGN_DELTA"),
    ALIGN_RATE("ALIGN_RATE"),
    ALIGN_INTERPOLATE("ALIGN_INTERPOLATE"),
    ALIGN_NEXT_OLDER("ALIGN_NEXT_OLDER"),
    ALIGN_MIN("ALIGN_MIN"),
    ALIGN_MAX("ALIGN_MAX"),
    ALIGN_MEAN("ALIGN_MEAN"),
    ALIGN_COUNT("ALIGN_COUNT"),
    ALIGN_SUM("ALIGN_SUM"),
    ALIGN_STDDEV("ALIGN_STDDEV"),
    ALIGN_COUNT_TRUE("ALIGN_COUNT_TRUE"),
    ALIGN_COUNT_FALSE("ALIGN_COUNT_FALSE"),
    ALIGN_FRACTION_TRUE("ALIGN_FRACTION_TRUE"),
    ALIGN_PERCENTILE99("ALIGN_PERCENTILE_99"),
    ALIGN_PERCENTILE95("ALIGN_PERCENTILE_95"),
    ALIGN_PERCENTILE50("ALIGN_PERCENTILE_50"),
    ALIGN_PERCENTILE05("ALIGN_PERCENTILE_05"),
    ALIGN_PERCENT_CHANGE("ALIGN_PERCENT_CHANGE");

    public final String value;

    private MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum(String value) {
        this.value = value;
    }
}
