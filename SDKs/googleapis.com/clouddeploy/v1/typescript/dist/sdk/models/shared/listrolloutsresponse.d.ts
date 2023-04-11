import { SpeakeasyBase } from "../../../internal/utils";
import { Rollout } from "./rollout";
/**
 * ListRolloutsResponse is the response object reutrned by `ListRollouts`.
 */
export declare class ListRolloutsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The `Rollout` objects.
     */
    rollouts?: Rollout[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
