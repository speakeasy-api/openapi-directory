package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SkippedDetail
 * Details for an outcome with a SKIPPED outcome summary.
**/
public class SkippedDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incompatibleAppVersion")
    public Boolean incompatibleAppVersion;
    public SkippedDetail withIncompatibleAppVersion(Boolean incompatibleAppVersion) {
        this.incompatibleAppVersion = incompatibleAppVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incompatibleArchitecture")
    public Boolean incompatibleArchitecture;
    public SkippedDetail withIncompatibleArchitecture(Boolean incompatibleArchitecture) {
        this.incompatibleArchitecture = incompatibleArchitecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incompatibleDevice")
    public Boolean incompatibleDevice;
    public SkippedDetail withIncompatibleDevice(Boolean incompatibleDevice) {
        this.incompatibleDevice = incompatibleDevice;
        return this;
    }
}