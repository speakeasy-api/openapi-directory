import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message representing label set. * A label is a key value pair set for a VM. * A LabelSet is a set of labels. * Labels within a LabelSet are ANDed. In other words, a LabelSet is applicable for a VM only if it matches all the labels in the LabelSet. * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will only be applicable for those VMs with both labels present.
 */
export declare class OSPolicyAssignmentLabelSet extends SpeakeasyBase {
    /**
     * Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected.
     */
    labels?: Record<string, string>;
}
