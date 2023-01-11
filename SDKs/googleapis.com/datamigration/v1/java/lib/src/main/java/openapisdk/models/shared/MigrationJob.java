package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MigrationJob
 * Represents a Database Migration Service migration job object.
**/
public class MigrationJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public MigrationJob withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public MigrationJob withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationDatabase")
    public DatabaseType destinationDatabase;
    public MigrationJob withDestinationDatabase(DatabaseType destinationDatabase) {
        this.destinationDatabase = destinationDatabase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public MigrationJob withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dumpFlags")
    public DumpFlags dumpFlags;
    public MigrationJob withDumpFlags(DumpFlags dumpFlags) {
        this.dumpFlags = dumpFlags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dumpPath")
    public String dumpPath;
    public MigrationJob withDumpPath(String dumpPath) {
        this.dumpPath = dumpPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public MigrationJob withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public MigrationJob withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public MigrationJob withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public MigrationJob withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MigrationJob withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phase")
    public MigrationJobPhaseEnum phase;
    public MigrationJob withPhase(MigrationJobPhaseEnum phase) {
        this.phase = phase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseSshConnectivity")
    public ReverseSshConnectivity reverseSshConnectivity;
    public MigrationJob withReverseSshConnectivity(ReverseSshConnectivity reverseSshConnectivity) {
        this.reverseSshConnectivity = reverseSshConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public MigrationJob withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDatabase")
    public DatabaseType sourceDatabase;
    public MigrationJob withSourceDatabase(DatabaseType sourceDatabase) {
        this.sourceDatabase = sourceDatabase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MigrationJobStateEnum state;
    public MigrationJob withState(MigrationJobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticIpConnectivity")
    public java.util.Map<String, Object> staticIpConnectivity;
    public MigrationJob withStaticIpConnectivity(java.util.Map<String, Object> staticIpConnectivity) {
        this.staticIpConnectivity = staticIpConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MigrationJobTypeEnum type;
    public MigrationJob withType(MigrationJobTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public MigrationJob withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcPeeringConnectivity")
    public VpcPeeringConnectivity vpcPeeringConnectivity;
    public MigrationJob withVpcPeeringConnectivity(VpcPeeringConnectivity vpcPeeringConnectivity) {
        this.vpcPeeringConnectivity = vpcPeeringConnectivity;
        return this;
    }
}