package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicPerfSampleSeries
 * Encapsulates the metadata for basic sample series represented by a line chart
**/
public class BasicPerfSampleSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perfMetricType")
    public BasicPerfSampleSeriesPerfMetricTypeEnum perfMetricType;
    public BasicPerfSampleSeries withPerfMetricType(BasicPerfSampleSeriesPerfMetricTypeEnum perfMetricType) {
        this.perfMetricType = perfMetricType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perfUnit")
    public BasicPerfSampleSeriesPerfUnitEnum perfUnit;
    public BasicPerfSampleSeries withPerfUnit(BasicPerfSampleSeriesPerfUnitEnum perfUnit) {
        this.perfUnit = perfUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleSeriesLabel")
    public BasicPerfSampleSeriesSampleSeriesLabelEnum sampleSeriesLabel;
    public BasicPerfSampleSeries withSampleSeriesLabel(BasicPerfSampleSeriesSampleSeriesLabelEnum sampleSeriesLabel) {
        this.sampleSeriesLabel = sampleSeriesLabel;
        return this;
    }
}