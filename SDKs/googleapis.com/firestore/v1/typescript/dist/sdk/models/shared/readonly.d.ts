import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a transaction that can only be used to read documents.
 */
export declare class ReadOnly extends SpeakeasyBase {
    /**
     * Reads documents at the given time. This may not be older than 60 seconds.
     */
    readTime?: string;
}
