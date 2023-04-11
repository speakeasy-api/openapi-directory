import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options specific to read / write transactions.
 */
export declare class ReadWrite extends SpeakeasyBase {
    /**
     * The transaction identifier of the transaction being retried.
     */
    previousTransaction?: string;
}
