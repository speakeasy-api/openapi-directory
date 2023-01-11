package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveActivity
 * A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
**/
public class DriveActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public Action[] actions;
    public DriveActivity withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actors")
    public Actor[] actors;
    public DriveActivity withActors(Actor[] actors) {
        this.actors = actors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryActionDetail")
    public ActionDetail primaryActionDetail;
    public DriveActivity withPrimaryActionDetail(ActionDetail primaryActionDetail) {
        this.primaryActionDetail = primaryActionDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public Target[] targets;
    public DriveActivity withTargets(Target[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public TimeRange timeRange;
    public DriveActivity withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public DriveActivity withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}