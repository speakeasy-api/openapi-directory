import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options specific to read-only transactions.
 */
export declare class ReadOnly extends SpeakeasyBase {
    /**
     * Reads entities at the given time. This may not be older than 60 seconds.
     */
    readTime?: string;
}
