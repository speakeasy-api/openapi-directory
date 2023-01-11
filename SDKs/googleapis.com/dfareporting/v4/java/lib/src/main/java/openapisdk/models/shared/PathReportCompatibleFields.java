package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathReportCompatibleFields
 * Represents fields that are compatible to be selected for a report of type "PATH".
**/
public class PathReportCompatibleFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelGroupings")
    public Dimension[] channelGroupings;
    public PathReportCompatibleFields withChannelGroupings(Dimension[] channelGroupings) {
        this.channelGroupings = channelGroupings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public PathReportCompatibleFields withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PathReportCompatibleFields withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public PathReportCompatibleFields withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathFilters")
    public Dimension[] pathFilters;
    public PathReportCompatibleFields withPathFilters(Dimension[] pathFilters) {
        this.pathFilters = pathFilters;
        return this;
    }
}