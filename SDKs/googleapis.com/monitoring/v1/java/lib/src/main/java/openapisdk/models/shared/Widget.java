package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Widget
 * Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
**/
public class Widget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertChart")
    public AlertChart alertChart;
    public Widget withAlertChart(AlertChart alertChart) {
        this.alertChart = alertChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blank")
    public java.util.Map<String, Object> blank;
    public Widget withBlank(java.util.Map<String, Object> blank) {
        this.blank = blank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collapsibleGroup")
    public CollapsibleGroup collapsibleGroup;
    public Widget withCollapsibleGroup(CollapsibleGroup collapsibleGroup) {
        this.collapsibleGroup = collapsibleGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logsPanel")
    public LogsPanel logsPanel;
    public Widget withLogsPanel(LogsPanel logsPanel) {
        this.logsPanel = logsPanel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scorecard")
    public Scorecard scorecard;
    public Widget withScorecard(Scorecard scorecard) {
        this.scorecard = scorecard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public Text text;
    public Widget withText(Text text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesTable")
    public TimeSeriesTable timeSeriesTable;
    public Widget withTimeSeriesTable(TimeSeriesTable timeSeriesTable) {
        this.timeSeriesTable = timeSeriesTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Widget withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xyChart")
    public XyChart xyChart;
    public Widget withXyChart(XyChart xyChart) {
        this.xyChart = xyChart;
        return this;
    }
}