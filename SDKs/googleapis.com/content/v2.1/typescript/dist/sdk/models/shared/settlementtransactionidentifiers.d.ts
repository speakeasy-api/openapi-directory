import { SpeakeasyBase } from "../../../internal/utils";
export declare class SettlementTransactionIdentifiers extends SpeakeasyBase {
    /**
     * The identifier of the adjustments, if it's available.
     */
    adjustmentId?: string;
    /**
     * The merchant provided order ID.
     */
    merchantOrderId?: string;
    /**
     * The identifier of the item.
     */
    orderItemId?: string;
    /**
     * The unique ID of the settlement transaction entry.
     */
    settlementEntryId?: string;
    /**
     * The shipment ids for the item.
     */
    shipmentIds?: string[];
    /**
     * The Google transaction ID.
     */
    transactionId?: string;
}
