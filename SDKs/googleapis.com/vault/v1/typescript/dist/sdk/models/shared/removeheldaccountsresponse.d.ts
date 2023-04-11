import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response for batch delete held accounts.
 */
export declare class RemoveHeldAccountsResponse extends SpeakeasyBase {
    /**
     * A list of statuses for the deleted accounts. Results have the same order as the request.
     */
    statuses?: Status[];
}
