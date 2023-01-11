package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DemoteMasterContext
 * Database instance demote primary instance context.
**/
public class DemoteMasterContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DemoteMasterContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterInstanceName")
    public String masterInstanceName;
    public DemoteMasterContext withMasterInstanceName(String masterInstanceName) {
        this.masterInstanceName = masterInstanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaConfiguration")
    public DemoteMasterConfiguration replicaConfiguration;
    public DemoteMasterContext withReplicaConfiguration(DemoteMasterConfiguration replicaConfiguration) {
        this.replicaConfiguration = replicaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipReplicationSetup")
    public Boolean skipReplicationSetup;
    public DemoteMasterContext withSkipReplicationSetup(Boolean skipReplicationSetup) {
        this.skipReplicationSetup = skipReplicationSetup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyGtidConsistency")
    public Boolean verifyGtidConsistency;
    public DemoteMasterContext withVerifyGtidConsistency(Boolean verifyGtidConsistency) {
        this.verifyGtidConsistency = verifyGtidConsistency;
        return this;
    }
}