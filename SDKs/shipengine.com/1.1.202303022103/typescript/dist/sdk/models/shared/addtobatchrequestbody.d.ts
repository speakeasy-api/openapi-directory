import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A modify batch object
 */
export declare class AddToBatchRequestBody extends SpeakeasyBase {
    /**
     * Array of Rate IDs to be modifed on the batch
     */
    rateIds?: string[];
    /**
     * The Shipment Ids to be modified on the batch
     */
    shipmentIds?: string[];
}
