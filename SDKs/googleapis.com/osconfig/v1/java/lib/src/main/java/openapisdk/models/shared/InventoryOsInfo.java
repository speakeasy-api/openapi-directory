package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryOsInfo
 * Operating system information for the VM.
**/
public class InventoryOsInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public String architecture;
    public InventoryOsInfo withArchitecture(String architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public InventoryOsInfo withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernelRelease")
    public String kernelRelease;
    public InventoryOsInfo withKernelRelease(String kernelRelease) {
        this.kernelRelease = kernelRelease;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernelVersion")
    public String kernelVersion;
    public InventoryOsInfo withKernelVersion(String kernelVersion) {
        this.kernelVersion = kernelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longName")
    public String longName;
    public InventoryOsInfo withLongName(String longName) {
        this.longName = longName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osconfigAgentVersion")
    public String osconfigAgentVersion;
    public InventoryOsInfo withOsconfigAgentVersion(String osconfigAgentVersion) {
        this.osconfigAgentVersion = osconfigAgentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortName")
    public String shortName;
    public InventoryOsInfo withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public InventoryOsInfo withVersion(String version) {
        this.version = version;
        return this;
    }
}