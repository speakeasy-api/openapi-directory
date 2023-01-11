package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pivot
 * The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.
**/
public class Pivot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilterClauses")
    public DimensionFilterClause[] dimensionFilterClauses;
    public Pivot withDimensionFilterClauses(DimensionFilterClause[] dimensionFilterClauses) {
        this.dimensionFilterClauses = dimensionFilterClauses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public Pivot withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxGroupCount")
    public Integer maxGroupCount;
    public Pivot withMaxGroupCount(Integer maxGroupCount) {
        this.maxGroupCount = maxGroupCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public Pivot withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startGroup")
    public Integer startGroup;
    public Pivot withStartGroup(Integer startGroup) {
        this.startGroup = startGroup;
        return this;
    }
}