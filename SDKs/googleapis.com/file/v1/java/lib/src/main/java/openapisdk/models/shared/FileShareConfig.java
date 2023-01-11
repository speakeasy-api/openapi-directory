package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileShareConfig
 * File share configuration for the instance.
**/
public class FileShareConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityGb")
    public String capacityGb;
    public FileShareConfig withCapacityGb(String capacityGb) {
        this.capacityGb = capacityGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FileShareConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsExportOptions")
    public NfsExportOptions[] nfsExportOptions;
    public FileShareConfig withNfsExportOptions(NfsExportOptions[] nfsExportOptions) {
        this.nfsExportOptions = nfsExportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceBackup")
    public String sourceBackup;
    public FileShareConfig withSourceBackup(String sourceBackup) {
        this.sourceBackup = sourceBackup;
        return this;
    }
}