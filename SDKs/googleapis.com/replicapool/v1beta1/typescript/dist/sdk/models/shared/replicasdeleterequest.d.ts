import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReplicasDeleteRequest extends SpeakeasyBase {
    /**
     * Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica.
     */
    abandonInstance?: boolean;
}
