import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A create batch request body
 */
export declare class CreateBatchRequestBody extends SpeakeasyBase {
    /**
     * Add custom messages for a particular batch
     */
    batchNotes?: string;
    /**
     * A string that uniquely identifies the external batch
     */
    externalBatchId?: string;
    /**
     * Array of rate IDs used in the batch
     */
    rateIds?: string[];
    /**
     * Array of shipment IDs used in the batch
     */
    shipmentIds?: string[];
}
