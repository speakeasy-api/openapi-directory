package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceIpBlockCatalog
 * List of IP blocks used by the Firebase Test Lab
**/
public class DeviceIpBlockCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipBlocks")
    public DeviceIpBlock[] ipBlocks;
    public DeviceIpBlockCatalog withIpBlocks(DeviceIpBlock[] ipBlocks) {
        this.ipBlocks = ipBlocks;
        return this;
    }
}