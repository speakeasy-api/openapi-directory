package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PivotFilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public BooleanCondition condition;
    public PivotFilterCriteria withCondition(BooleanCondition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleByDefault")
    public Boolean visibleByDefault;
    public PivotFilterCriteria withVisibleByDefault(Boolean visibleByDefault) {
        this.visibleByDefault = visibleByDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleValues")
    public String[] visibleValues;
    public PivotFilterCriteria withVisibleValues(String[] visibleValues) {
        this.visibleValues = visibleValues;
        return this;
    }
}