import { SpeakeasyBase } from "../../../internal/utils";
import { MessageFlag } from "./messageflag";
/**
 * Successful response
 */
export declare class QueryMessageFlagsResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    flags: MessageFlag[];
}
