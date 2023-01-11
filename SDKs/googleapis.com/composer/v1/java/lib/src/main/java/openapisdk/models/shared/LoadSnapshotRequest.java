package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadSnapshotRequest
 * Request to load a snapshot into a Cloud Composer environment.
**/
public class LoadSnapshotRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipAirflowOverridesSetting")
    public Boolean skipAirflowOverridesSetting;
    public LoadSnapshotRequest withSkipAirflowOverridesSetting(Boolean skipAirflowOverridesSetting) {
        this.skipAirflowOverridesSetting = skipAirflowOverridesSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipEnvironmentVariablesSetting")
    public Boolean skipEnvironmentVariablesSetting;
    public LoadSnapshotRequest withSkipEnvironmentVariablesSetting(Boolean skipEnvironmentVariablesSetting) {
        this.skipEnvironmentVariablesSetting = skipEnvironmentVariablesSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipGcsDataCopying")
    public Boolean skipGcsDataCopying;
    public LoadSnapshotRequest withSkipGcsDataCopying(Boolean skipGcsDataCopying) {
        this.skipGcsDataCopying = skipGcsDataCopying;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipPypiPackagesInstallation")
    public Boolean skipPypiPackagesInstallation;
    public LoadSnapshotRequest withSkipPypiPackagesInstallation(Boolean skipPypiPackagesInstallation) {
        this.skipPypiPackagesInstallation = skipPypiPackagesInstallation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotPath")
    public String snapshotPath;
    public LoadSnapshotRequest withSnapshotPath(String snapshotPath) {
        this.snapshotPath = snapshotPath;
        return this;
    }
}