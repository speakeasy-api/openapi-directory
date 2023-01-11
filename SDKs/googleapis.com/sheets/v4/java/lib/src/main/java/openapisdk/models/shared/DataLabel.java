package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataLabel
 * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
**/
public class DataLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customLabelData")
    public ChartData customLabelData;
    public DataLabel withCustomLabelData(ChartData customLabelData) {
        this.customLabelData = customLabelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placement")
    public DataLabelPlacementEnum placement;
    public DataLabel withPlacement(DataLabelPlacementEnum placement) {
        this.placement = placement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textFormat")
    public TextFormat textFormat;
    public DataLabel withTextFormat(TextFormat textFormat) {
        this.textFormat = textFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DataLabelTypeEnum type;
    public DataLabel withType(DataLabelTypeEnum type) {
        this.type = type;
        return this;
    }
}