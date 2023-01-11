package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersistenceConfig
 * Configuration of the persistence functionality.
**/
public class PersistenceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistenceMode")
    public PersistenceConfigPersistenceModeEnum persistenceMode;
    public PersistenceConfig withPersistenceMode(PersistenceConfigPersistenceModeEnum persistenceMode) {
        this.persistenceMode = persistenceMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rdbNextSnapshotTime")
    public String rdbNextSnapshotTime;
    public PersistenceConfig withRdbNextSnapshotTime(String rdbNextSnapshotTime) {
        this.rdbNextSnapshotTime = rdbNextSnapshotTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rdbSnapshotPeriod")
    public PersistenceConfigRdbSnapshotPeriodEnum rdbSnapshotPeriod;
    public PersistenceConfig withRdbSnapshotPeriod(PersistenceConfigRdbSnapshotPeriodEnum rdbSnapshotPeriod) {
        this.rdbSnapshotPeriod = rdbSnapshotPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rdbSnapshotStartTime")
    public String rdbSnapshotStartTime;
    public PersistenceConfig withRdbSnapshotStartTime(String rdbSnapshotStartTime) {
        this.rdbSnapshotStartTime = rdbSnapshotStartTime;
        return this;
    }
}