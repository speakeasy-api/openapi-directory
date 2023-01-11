package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrimaryInstanceSettingsInput
 * Settings for the cluster's primary instance
**/
public class PrimaryInstanceSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseFlags")
    public java.util.Map<String, String> databaseFlags;
    public PrimaryInstanceSettingsInput withDatabaseFlags(java.util.Map<String, String> databaseFlags) {
        this.databaseFlags = databaseFlags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PrimaryInstanceSettingsInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PrimaryInstanceSettingsInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineConfig")
    public MachineConfig machineConfig;
    public PrimaryInstanceSettingsInput withMachineConfig(MachineConfig machineConfig) {
        this.machineConfig = machineConfig;
        return this;
    }
}