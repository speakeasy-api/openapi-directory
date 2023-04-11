import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutPayor } from "./payoutpayor";
export declare class PaymentResponseV4Payout extends SpeakeasyBase {
    /**
     * Details of payor and principal participating in a payout.
     */
    payoutFrom?: PayoutPayor;
    payoutId?: string;
    /**
     * Details of payor and principal participating in a payout.
     */
    payoutTo?: PayoutPayor;
}
