import { SpeakeasyBase } from "../../../internal/utils";
/**
 * V1UpdateOrderRequest
 */
export declare class V1UpdateOrderRequest extends SpeakeasyBase {
    /**
     * The action to perform on the order (COMPLETE, CANCEL, or REFUND).
     */
    action: string;
    /**
     * A merchant-specified note about the canceling of the order. Only valid if action is CANCEL.
     */
    canceledNote?: string;
    /**
     * A merchant-specified note about the completion of the order. Only valid if action is COMPLETE.
     */
    completedNote?: string;
    /**
     * A merchant-specified note about the refunding of the order. Only valid if action is REFUND.
     */
    refundedNote?: string;
    /**
     * The tracking number of the shipment associated with the order. Only valid if action is COMPLETE.
     */
    shippedTrackingNumber?: string;
}
