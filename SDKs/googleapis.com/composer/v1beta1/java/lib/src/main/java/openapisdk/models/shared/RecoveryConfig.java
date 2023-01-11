package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecoveryConfig
 * The Recovery settings of an environment.
**/
public class RecoveryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledSnapshotsConfig")
    public ScheduledSnapshotsConfig scheduledSnapshotsConfig;
    public RecoveryConfig withScheduledSnapshotsConfig(ScheduledSnapshotsConfig scheduledSnapshotsConfig) {
        this.scheduledSnapshotsConfig = scheduledSnapshotsConfig;
        return this;
    }
}