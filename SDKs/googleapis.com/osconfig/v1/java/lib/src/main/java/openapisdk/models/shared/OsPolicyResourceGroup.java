package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceGroup
 * Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
**/
public class OsPolicyResourceGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryFilters")
    public OsPolicyInventoryFilter[] inventoryFilters;
    public OsPolicyResourceGroup withInventoryFilters(OsPolicyInventoryFilter[] inventoryFilters) {
        this.inventoryFilters = inventoryFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public OsPolicyResource[] resources;
    public OsPolicyResourceGroup withResources(OsPolicyResource[] resources) {
        this.resources = resources;
        return this;
    }
}