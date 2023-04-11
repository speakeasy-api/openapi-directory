import { SpeakeasyBase } from "../../../internal/utils";
export declare class LimitInfo extends SpeakeasyBase {
    /**
     * The maximum number of calls allowed for the time window
     */
    limit: number;
    /**
     * The number of remaining calls in the current window
     */
    remaining: number;
    /**
     * The Unix timestamp of the next window
     */
    reset: number;
}
