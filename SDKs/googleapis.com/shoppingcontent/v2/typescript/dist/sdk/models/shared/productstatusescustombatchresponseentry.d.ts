import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ProductStatus } from "./productstatus";
/**
 * A batch entry encoding a single non-batch productstatuses response.
 */
export declare class ProductstatusesCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`"
     */
    kind?: string;
    /**
     * The status of a product, i.e., information about a product computed asynchronously.
     */
    productStatus?: ProductStatus;
}
