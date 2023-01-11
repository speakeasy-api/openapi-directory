package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryVersionedPackage
 * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
**/
public class InventoryVersionedPackage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public String architecture;
    public InventoryVersionedPackage withArchitecture(String architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public InventoryVersionedPackage withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public InventoryVersionedPackage withVersion(String version) {
        this.version = version;
        return this;
    }
}