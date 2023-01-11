package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicaConfiguration
 * Read-replica configuration for connecting to the primary instance.
**/
public class ReplicaConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failoverTarget")
    public Boolean failoverTarget;
    public ReplicaConfiguration withFailoverTarget(Boolean failoverTarget) {
        this.failoverTarget = failoverTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ReplicaConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlReplicaConfiguration")
    public MySqlReplicaConfiguration mysqlReplicaConfiguration;
    public ReplicaConfiguration withMysqlReplicaConfiguration(MySqlReplicaConfiguration mysqlReplicaConfiguration) {
        this.mysqlReplicaConfiguration = mysqlReplicaConfiguration;
        return this;
    }
}