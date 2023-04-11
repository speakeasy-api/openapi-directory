import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for GetGuestAttributes.
 */
export declare class GetGuestAttributesRequest extends SpeakeasyBase {
    /**
     * The guest attributes path to be queried.
     */
    queryPath?: string;
    /**
     * The 0-based worker ID. If it is empty, all workers' GuestAttributes will be returned.
     */
    workerIds?: string[];
}
