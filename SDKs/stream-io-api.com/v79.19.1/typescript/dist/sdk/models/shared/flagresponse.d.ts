import { SpeakeasyBase } from "../../../internal/utils";
import { Flag } from "./flag";
/**
 * Successful response
 */
export declare class FlagResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    /**
     * Contains information about flagged user or message
     */
    flag?: Flag;
}
