package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DemoteMasterConfiguration
 * Read-replica configuration for connecting to the on-premises primary instance.
**/
public class DemoteMasterConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DemoteMasterConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlReplicaConfiguration")
    public DemoteMasterMySqlReplicaConfiguration mysqlReplicaConfiguration;
    public DemoteMasterConfiguration withMysqlReplicaConfiguration(DemoteMasterMySqlReplicaConfiguration mysqlReplicaConfiguration) {
        this.mysqlReplicaConfiguration = mysqlReplicaConfiguration;
        return this;
    }
}