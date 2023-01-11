package openapisdk.models.shared;


public enum PickTimeSeriesFilterRankingMethodEnum {
    METHOD_UNSPECIFIED("METHOD_UNSPECIFIED"),
    METHOD_MEAN("METHOD_MEAN"),
    METHOD_MAX("METHOD_MAX"),
    METHOD_MIN("METHOD_MIN"),
    METHOD_SUM("METHOD_SUM"),
    METHOD_LATEST("METHOD_LATEST");

    public final String value;

    private PickTimeSeriesFilterRankingMethodEnum(String value) {
        this.value = value;
    }
}
