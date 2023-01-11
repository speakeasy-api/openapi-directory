package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardFilter
 * A filter to reduce the amount of data charted in relevant widgets.
**/
public class DashboardFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterType")
    public DashboardFilterFilterTypeEnum filterType;
    public DashboardFilter withFilterType(DashboardFilterFilterTypeEnum filterType) {
        this.filterType = filterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelKey")
    public String labelKey;
    public DashboardFilter withLabelKey(String labelKey) {
        this.labelKey = labelKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public DashboardFilter withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateVariable")
    public String templateVariable;
    public DashboardFilter withTemplateVariable(String templateVariable) {
        this.templateVariable = templateVariable;
        return this;
    }
}