package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistogramChartSpec
 * A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
**/
public class HistogramChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketSize")
    public Double bucketSize;
    public HistogramChartSpec withBucketSize(Double bucketSize) {
        this.bucketSize = bucketSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legendPosition")
    public HistogramChartSpecLegendPositionEnum legendPosition;
    public HistogramChartSpec withLegendPosition(HistogramChartSpecLegendPositionEnum legendPosition) {
        this.legendPosition = legendPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlierPercentile")
    public Double outlierPercentile;
    public HistogramChartSpec withOutlierPercentile(Double outlierPercentile) {
        this.outlierPercentile = outlierPercentile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public HistogramSeries[] series;
    public HistogramChartSpec withSeries(HistogramSeries[] series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showItemDividers")
    public Boolean showItemDividers;
    public HistogramChartSpec withShowItemDividers(Boolean showItemDividers) {
        this.showItemDividers = showItemDividers;
        return this;
    }
}