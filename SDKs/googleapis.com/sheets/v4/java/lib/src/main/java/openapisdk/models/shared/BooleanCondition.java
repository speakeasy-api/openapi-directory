package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BooleanCondition
 * A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.
**/
public class BooleanCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BooleanConditionTypeEnum type;
    public BooleanCondition withType(BooleanConditionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public ConditionValue[] values;
    public BooleanCondition withValues(ConditionValue[] values) {
        this.values = values;
        return this;
    }
}