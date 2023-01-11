package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersistenceConfigInput
 * Configuration of the persistence functionality.
**/
public class PersistenceConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistenceMode")
    public PersistenceConfigPersistenceModeEnum persistenceMode;
    public PersistenceConfigInput withPersistenceMode(PersistenceConfigPersistenceModeEnum persistenceMode) {
        this.persistenceMode = persistenceMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rdbSnapshotPeriod")
    public PersistenceConfigRdbSnapshotPeriodEnum rdbSnapshotPeriod;
    public PersistenceConfigInput withRdbSnapshotPeriod(PersistenceConfigRdbSnapshotPeriodEnum rdbSnapshotPeriod) {
        this.rdbSnapshotPeriod = rdbSnapshotPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rdbSnapshotStartTime")
    public String rdbSnapshotStartTime;
    public PersistenceConfigInput withRdbSnapshotStartTime(String rdbSnapshotStartTime) {
        this.rdbSnapshotStartTime = rdbSnapshotStartTime;
        return this;
    }
}