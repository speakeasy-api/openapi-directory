package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrgChartSpec
 * An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".
**/
public class OrgChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public ChartData labels;
    public OrgChartSpec withLabels(ChartData labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeColor")
    public Color nodeColor;
    public OrgChartSpec withNodeColor(Color nodeColor) {
        this.nodeColor = nodeColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeColorStyle")
    public ColorStyle nodeColorStyle;
    public OrgChartSpec withNodeColorStyle(ColorStyle nodeColorStyle) {
        this.nodeColorStyle = nodeColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeSize")
    public OrgChartSpecNodeSizeEnum nodeSize;
    public OrgChartSpec withNodeSize(OrgChartSpecNodeSizeEnum nodeSize) {
        this.nodeSize = nodeSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLabels")
    public ChartData parentLabels;
    public OrgChartSpec withParentLabels(ChartData parentLabels) {
        this.parentLabels = parentLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedNodeColor")
    public Color selectedNodeColor;
    public OrgChartSpec withSelectedNodeColor(Color selectedNodeColor) {
        this.selectedNodeColor = selectedNodeColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedNodeColorStyle")
    public ColorStyle selectedNodeColorStyle;
    public OrgChartSpec withSelectedNodeColorStyle(ColorStyle selectedNodeColorStyle) {
        this.selectedNodeColorStyle = selectedNodeColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tooltips")
    public ChartData tooltips;
    public OrgChartSpec withTooltips(ChartData tooltips) {
        this.tooltips = tooltips;
        return this;
    }
}