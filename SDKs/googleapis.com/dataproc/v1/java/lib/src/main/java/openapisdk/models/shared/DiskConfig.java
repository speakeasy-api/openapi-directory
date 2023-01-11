package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiskConfig
 * Specifies the config of disk options for a group of VM instances.
**/
public class DiskConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskSizeGb")
    public Integer bootDiskSizeGb;
    public DiskConfig withBootDiskSizeGb(Integer bootDiskSizeGb) {
        this.bootDiskSizeGb = bootDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskType")
    public String bootDiskType;
    public DiskConfig withBootDiskType(String bootDiskType) {
        this.bootDiskType = bootDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localSsdInterface")
    public String localSsdInterface;
    public DiskConfig withLocalSsdInterface(String localSsdInterface) {
        this.localSsdInterface = localSsdInterface;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numLocalSsds")
    public Integer numLocalSsds;
    public DiskConfig withNumLocalSsds(Integer numLocalSsds) {
        this.numLocalSsds = numLocalSsds;
        return this;
    }
}