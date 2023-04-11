import { SpeakeasyBase } from "../../../internal/utils";
import { ReadOnly } from "./readonly";
import { ReadWrite } from "./readwrite";
/**
 * Options for creating a new transaction.
 */
export declare class TransactionOptions extends SpeakeasyBase {
    /**
     * Options for a transaction that can only be used to read documents.
     */
    readOnly?: ReadOnly;
    /**
     * Options for a transaction that can be used to read and write documents.
     */
    readWrite?: ReadWrite;
}
