import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
/**
 * Batch entry encoding a single local inventory update response.
 */
export declare class LocalinventoryCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponseEntry`"
     */
    kind?: string;
}
