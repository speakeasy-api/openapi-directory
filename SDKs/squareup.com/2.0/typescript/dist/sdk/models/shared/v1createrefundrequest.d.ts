import { SpeakeasyBase } from "../../../internal/utils";
import { V1Money } from "./v1money";
/**
 * V1CreateRefundRequest
 */
export declare class V1CreateRefundRequest extends SpeakeasyBase {
    /**
     * The ID of the payment to refund. If you are creating a `PARTIAL`
     *
     * @remarks
     * refund for a split tender payment, instead provide the id of the
     * particular tender you want to refund.
     */
    paymentId: string;
    /**
     * The reason for the refund.
     */
    reason: string;
    refundedMoney?: V1Money;
    /**
     * An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once.
     */
    requestIdempotenceKey?: string;
    /**
     * The type of refund (FULL or PARTIAL).
     */
    type: string;
}
