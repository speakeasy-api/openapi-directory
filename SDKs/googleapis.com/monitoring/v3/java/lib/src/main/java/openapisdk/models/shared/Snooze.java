package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Snooze
 * A Snooze will prevent any alerts from being opened, and close any that are already open. The Snooze will work on alerts that match the criteria defined in the Snooze. The Snooze will be active from interval.start_time through interval.end_time.
**/
public class Snooze {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criteria")
    public Criteria criteria;
    public Snooze withCriteria(Criteria criteria) {
        this.criteria = criteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Snooze withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public TimeInterval interval;
    public Snooze withInterval(TimeInterval interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Snooze withName(String name) {
        this.name = name;
        return this;
    }
}