import { SpeakeasyBase } from "../../../internal/utils";
import { OperationError } from "./operationerror";
/**
 * Database instance operation errors list wrapper.
 */
export declare class OperationErrors extends SpeakeasyBase {
    /**
     * The list of errors encountered while processing this operation.
     */
    errors?: OperationError[];
    /**
     * This is always `sql#operationErrors`.
     */
    kind?: string;
}
