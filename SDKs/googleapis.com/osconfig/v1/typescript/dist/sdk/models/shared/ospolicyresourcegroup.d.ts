import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyInventoryFilter } from "./ospolicyinventoryfilter";
import { OSPolicyResource } from "./ospolicyresource";
/**
 * Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
 */
export declare class OSPolicyResourceGroup extends SpeakeasyBase {
    /**
     * List of inventory filters for the resource group. The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters. For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory_filters[0].os_short_name='rhel' and inventory_filters[1].os_short_name='centos' If the list is empty, this resource group will be applied to the target VM unconditionally.
     */
    inventoryFilters?: OSPolicyInventoryFilter[];
    /**
     * Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.
     */
    resources?: OSPolicyResource[];
}
