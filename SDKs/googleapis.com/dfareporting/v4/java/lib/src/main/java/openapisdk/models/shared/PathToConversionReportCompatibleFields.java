package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathToConversionReportCompatibleFields
 * Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
**/
public class PathToConversionReportCompatibleFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionDimensions")
    public Dimension[] conversionDimensions;
    public PathToConversionReportCompatibleFields withConversionDimensions(Dimension[] conversionDimensions) {
        this.conversionDimensions = conversionDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFloodlightVariables")
    public Dimension[] customFloodlightVariables;
    public PathToConversionReportCompatibleFields withCustomFloodlightVariables(Dimension[] customFloodlightVariables) {
        this.customFloodlightVariables = customFloodlightVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PathToConversionReportCompatibleFields withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public PathToConversionReportCompatibleFields withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perInteractionDimensions")
    public Dimension[] perInteractionDimensions;
    public PathToConversionReportCompatibleFields withPerInteractionDimensions(Dimension[] perInteractionDimensions) {
        this.perInteractionDimensions = perInteractionDimensions;
        return this;
    }
}