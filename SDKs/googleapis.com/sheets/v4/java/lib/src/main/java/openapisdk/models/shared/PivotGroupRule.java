package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotGroupRule
 * An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.
**/
public class PivotGroupRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTimeRule")
    public DateTimeRule dateTimeRule;
    public PivotGroupRule withDateTimeRule(DateTimeRule dateTimeRule) {
        this.dateTimeRule = dateTimeRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramRule")
    public HistogramRule histogramRule;
    public PivotGroupRule withHistogramRule(HistogramRule histogramRule) {
        this.histogramRule = histogramRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualRule")
    public ManualRule manualRule;
    public PivotGroupRule withManualRule(ManualRule manualRule) {
        this.manualRule = manualRule;
        return this;
    }
}