import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyAssignmentInstanceFilterInventory } from "./ospolicyassignmentinstancefilterinventory";
import { OSPolicyAssignmentLabelSet } from "./ospolicyassignmentlabelset";
/**
 * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
 */
export declare class OSPolicyAssignmentInstanceFilter extends SpeakeasyBase {
    /**
     * Target all VMs in the project. If true, no other criteria is permitted.
     */
    all?: boolean;
    /**
     * List of label sets used for VM exclusion. If the list has more than one label set, the VM is excluded if any of the label sets are applicable for the VM.
     */
    exclusionLabels?: OSPolicyAssignmentLabelSet[];
    /**
     * List of label sets used for VM inclusion. If the list has more than one `LabelSet`, the VM is included if any of the label sets are applicable for the VM.
     */
    inclusionLabels?: OSPolicyAssignmentLabelSet[];
    /**
     * List of inventories to select VMs. A VM is selected if its inventory data matches at least one of the following inventories.
     */
    inventories?: OSPolicyAssignmentInstanceFilterInventory[];
    /**
     * Deprecated. Use the `inventories` field instead. A VM is selected if it's OS short name matches with any of the values provided in this list.
     */
    osShortNames?: string[];
}
