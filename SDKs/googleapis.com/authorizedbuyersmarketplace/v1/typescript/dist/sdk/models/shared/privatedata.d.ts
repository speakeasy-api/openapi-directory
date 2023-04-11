import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Buyers are allowed to store certain types of private data in a proposal or deal.
 */
export declare class PrivateData extends SpeakeasyBase {
    /**
     * A buyer specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units).
     */
    referenceId?: string;
}
