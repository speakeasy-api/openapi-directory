package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MigrationJobInput
 * Represents a Database Migration Service migration job object.
**/
public class MigrationJobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public MigrationJobInput withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationDatabase")
    public DatabaseType destinationDatabase;
    public MigrationJobInput withDestinationDatabase(DatabaseType destinationDatabase) {
        this.destinationDatabase = destinationDatabase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public MigrationJobInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dumpPath")
    public String dumpPath;
    public MigrationJobInput withDumpPath(String dumpPath) {
        this.dumpPath = dumpPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public MigrationJobInput withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public MigrationJobInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MigrationJobInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseSshConnectivity")
    public ReverseSshConnectivity reverseSshConnectivity;
    public MigrationJobInput withReverseSshConnectivity(ReverseSshConnectivity reverseSshConnectivity) {
        this.reverseSshConnectivity = reverseSshConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public MigrationJobInput withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDatabase")
    public DatabaseType sourceDatabase;
    public MigrationJobInput withSourceDatabase(DatabaseType sourceDatabase) {
        this.sourceDatabase = sourceDatabase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MigrationJobStateEnum state;
    public MigrationJobInput withState(MigrationJobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticIpConnectivity")
    public java.util.Map<String, Object> staticIpConnectivity;
    public MigrationJobInput withStaticIpConnectivity(java.util.Map<String, Object> staticIpConnectivity) {
        this.staticIpConnectivity = staticIpConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MigrationJobTypeEnum type;
    public MigrationJobInput withType(MigrationJobTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcPeeringConnectivity")
    public VpcPeeringConnectivity vpcPeeringConnectivity;
    public MigrationJobInput withVpcPeeringConnectivity(VpcPeeringConnectivity vpcPeeringConnectivity) {
        this.vpcPeeringConnectivity = vpcPeeringConnectivity;
        return this;
    }
}