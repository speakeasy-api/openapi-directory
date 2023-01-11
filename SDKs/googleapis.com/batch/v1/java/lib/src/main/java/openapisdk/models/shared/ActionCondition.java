package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionCondition
 * Conditions for actions to deal with task failures.
**/
public class ActionCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCodes")
    public Integer[] exitCodes;
    public ActionCondition withExitCodes(Integer[] exitCodes) {
        this.exitCodes = exitCodes;
        return this;
    }
}