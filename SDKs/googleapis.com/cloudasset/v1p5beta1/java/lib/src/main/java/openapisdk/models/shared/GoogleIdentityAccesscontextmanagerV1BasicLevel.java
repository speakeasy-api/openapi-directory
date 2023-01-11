package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1BasicLevel
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
**/
public class GoogleIdentityAccesscontextmanagerV1BasicLevel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combiningFunction")
    public GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum combiningFunction;
    public GoogleIdentityAccesscontextmanagerV1BasicLevel withCombiningFunction(GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum combiningFunction) {
        this.combiningFunction = combiningFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleIdentityAccesscontextmanagerV1Condition[] conditions;
    public GoogleIdentityAccesscontextmanagerV1BasicLevel withConditions(GoogleIdentityAccesscontextmanagerV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
}