package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrimaryInstanceSettings
 * Settings for the cluster's primary instance
**/
public class PrimaryInstanceSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseFlags")
    public java.util.Map<String, String> databaseFlags;
    public PrimaryInstanceSettings withDatabaseFlags(java.util.Map<String, String> databaseFlags) {
        this.databaseFlags = databaseFlags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PrimaryInstanceSettings withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PrimaryInstanceSettings withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineConfig")
    public MachineConfig machineConfig;
    public PrimaryInstanceSettings withMachineConfig(MachineConfig machineConfig) {
        this.machineConfig = machineConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateIp")
    public String privateIp;
    public PrimaryInstanceSettings withPrivateIp(String privateIp) {
        this.privateIp = privateIp;
        return this;
    }
}