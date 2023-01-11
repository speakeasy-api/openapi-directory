package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompatibleFields
 * Represents a response to the queryCompatibleFields method.
**/
public class CompatibleFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossDimensionReachReportCompatibleFields")
    public CrossDimensionReachReportCompatibleFields crossDimensionReachReportCompatibleFields;
    public CompatibleFields withCrossDimensionReachReportCompatibleFields(CrossDimensionReachReportCompatibleFields crossDimensionReachReportCompatibleFields) {
        this.crossDimensionReachReportCompatibleFields = crossDimensionReachReportCompatibleFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightReportCompatibleFields")
    public FloodlightReportCompatibleFields floodlightReportCompatibleFields;
    public CompatibleFields withFloodlightReportCompatibleFields(FloodlightReportCompatibleFields floodlightReportCompatibleFields) {
        this.floodlightReportCompatibleFields = floodlightReportCompatibleFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CompatibleFields withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathAttributionReportCompatibleFields")
    public PathReportCompatibleFields pathAttributionReportCompatibleFields;
    public CompatibleFields withPathAttributionReportCompatibleFields(PathReportCompatibleFields pathAttributionReportCompatibleFields) {
        this.pathAttributionReportCompatibleFields = pathAttributionReportCompatibleFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathReportCompatibleFields")
    public PathReportCompatibleFields pathReportCompatibleFields;
    public CompatibleFields withPathReportCompatibleFields(PathReportCompatibleFields pathReportCompatibleFields) {
        this.pathReportCompatibleFields = pathReportCompatibleFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathToConversionReportCompatibleFields")
    public PathToConversionReportCompatibleFields pathToConversionReportCompatibleFields;
    public CompatibleFields withPathToConversionReportCompatibleFields(PathToConversionReportCompatibleFields pathToConversionReportCompatibleFields) {
        this.pathToConversionReportCompatibleFields = pathToConversionReportCompatibleFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachReportCompatibleFields")
    public ReachReportCompatibleFields reachReportCompatibleFields;
    public CompatibleFields withReachReportCompatibleFields(ReachReportCompatibleFields reachReportCompatibleFields) {
        this.reachReportCompatibleFields = reachReportCompatibleFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportCompatibleFields")
    public ReportCompatibleFields reportCompatibleFields;
    public CompatibleFields withReportCompatibleFields(ReportCompatibleFields reportCompatibleFields) {
        this.reportCompatibleFields = reportCompatibleFields;
        return this;
    }
}