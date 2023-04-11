import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch entry encoding a single non-batch productstatuses request.
 */
export declare class ProductstatusesCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    includeAttributes?: boolean;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`"
     */
    method?: string;
    /**
     * The ID of the product whose status to get.
     */
    productId?: string;
}
