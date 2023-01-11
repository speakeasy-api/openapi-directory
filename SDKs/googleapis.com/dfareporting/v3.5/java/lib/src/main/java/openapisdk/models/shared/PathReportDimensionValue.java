package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathReportDimensionValue
 * Represents a PathReportDimensionValue resource.
**/
public class PathReportDimensionValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionName")
    public String dimensionName;
    public PathReportDimensionValue withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public PathReportDimensionValue withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PathReportDimensionValue withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchType")
    public PathReportDimensionValueMatchTypeEnum matchType;
    public PathReportDimensionValue withMatchType(PathReportDimensionValueMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public PathReportDimensionValue withValues(String[] values) {
        this.values = values;
        return this;
    }
}