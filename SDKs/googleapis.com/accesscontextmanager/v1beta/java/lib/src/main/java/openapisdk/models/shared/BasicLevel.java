package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicLevel
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
**/
public class BasicLevel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combiningFunction")
    public BasicLevelCombiningFunctionEnum combiningFunction;
    public BasicLevel withCombiningFunction(BasicLevelCombiningFunctionEnum combiningFunction) {
        this.combiningFunction = combiningFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public Condition[] conditions;
    public BasicLevel withConditions(Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
}