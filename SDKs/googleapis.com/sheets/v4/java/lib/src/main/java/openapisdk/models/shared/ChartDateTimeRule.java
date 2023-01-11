package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartDateTimeRule
 * Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.
**/
public class ChartDateTimeRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ChartDateTimeRuleTypeEnum type;
    public ChartDateTimeRule withType(ChartDateTimeRuleTypeEnum type) {
        this.type = type;
        return this;
    }
}