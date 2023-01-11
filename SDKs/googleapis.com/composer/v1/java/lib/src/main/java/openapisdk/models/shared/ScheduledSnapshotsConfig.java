package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduledSnapshotsConfig
 * The configuration for scheduled snapshot creation mechanism.
**/
public class ScheduledSnapshotsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public ScheduledSnapshotsConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotCreationSchedule")
    public String snapshotCreationSchedule;
    public ScheduledSnapshotsConfig withSnapshotCreationSchedule(String snapshotCreationSchedule) {
        this.snapshotCreationSchedule = snapshotCreationSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotLocation")
    public String snapshotLocation;
    public ScheduledSnapshotsConfig withSnapshotLocation(String snapshotLocation) {
        this.snapshotLocation = snapshotLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public ScheduledSnapshotsConfig withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}