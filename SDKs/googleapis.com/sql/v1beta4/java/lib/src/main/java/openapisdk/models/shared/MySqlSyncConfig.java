package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MySqlSyncConfig
 * MySQL-specific external server sync settings.
**/
public class MySqlSyncConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialSyncFlags")
    public SyncFlags[] initialSyncFlags;
    public MySqlSyncConfig withInitialSyncFlags(SyncFlags[] initialSyncFlags) {
        this.initialSyncFlags = initialSyncFlags;
        return this;
    }
}