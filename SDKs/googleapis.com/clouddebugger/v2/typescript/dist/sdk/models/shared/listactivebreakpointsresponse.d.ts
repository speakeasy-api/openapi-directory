import { SpeakeasyBase } from "../../../internal/utils";
import { Breakpoint } from "./breakpoint";
/**
 * Response for listing active breakpoints.
 */
export declare class ListActiveBreakpointsResponse extends SpeakeasyBase {
    /**
     * List of all active breakpoints. The fields `id` and `location` are guaranteed to be set on each breakpoint.
     */
    breakpoints?: Breakpoint[];
    /**
     * A token that can be used in the next method call to block until the list of breakpoints changes.
     */
    nextWaitToken?: string;
    /**
     * If set to `true`, indicates that there is no change to the list of active breakpoints and the server-selected timeout has expired. The `breakpoints` field would be empty and should be ignored.
     */
    waitExpired?: boolean;
}
