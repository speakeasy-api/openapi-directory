package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalEventDetails
 * Details for the goal of the type EVENT.
**/
public class GoalEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventConditions")
    public GoalEventDetailsEventConditions[] eventConditions;
    public GoalEventDetails withEventConditions(GoalEventDetailsEventConditions[] eventConditions) {
        this.eventConditions = eventConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useEventValue")
    public Boolean useEventValue;
    public GoalEventDetails withUseEventValue(Boolean useEventValue) {
        this.useEventValue = useEventValue;
        return this;
    }
}