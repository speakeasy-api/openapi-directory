import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { RegionalInventory } from "./regionalinventory";
/**
 * A batch entry encoding a single non-batch regional inventory response.
 */
export declare class RegionalinventoryCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponseEntry`".
     */
    kind?: string;
    /**
     * Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
     */
    regionalInventory?: RegionalInventory;
}
