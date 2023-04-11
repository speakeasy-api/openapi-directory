import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains output only fields. Use this sub-message for actual values set on Instance attributes as compared to the value requested by the user (intent) in their instance CRUD calls.
 */
export declare class ResourceStatus extends SpeakeasyBase {
    /**
     * [Output Only] An opaque ID of the host on which the VM is running.
     */
    physicalHost?: string;
}
