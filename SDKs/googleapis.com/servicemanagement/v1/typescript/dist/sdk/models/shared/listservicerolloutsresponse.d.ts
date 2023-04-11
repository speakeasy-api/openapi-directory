import { SpeakeasyBase } from "../../../internal/utils";
import { Rollout } from "./rollout";
/**
 * Response message for ListServiceRollouts method.
 */
export declare class ListServiceRolloutsResponse extends SpeakeasyBase {
    /**
     * The token of the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of rollout resources.
     */
    rollouts?: Rollout[];
}
