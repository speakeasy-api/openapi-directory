package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * Information about the action.
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public Actor actor;
    public Action withActor(Actor actor) {
        this.actor = actor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public ActionDetail detail;
    public Action withDetail(ActionDetail detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public Target target;
    public Action withTarget(Target target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public TimeRange timeRange;
    public Action withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public Action withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}