import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutPayeeV3 } from "./payoutpayeev3";
export declare class PaymentV3 extends SpeakeasyBase {
    /**
     * The amount of the payment in minor units
     */
    amount?: number;
    /**
     * Populated only if the payment was automatically withdrawn during instruction for being invalid
     */
    autoWithdrawnReasonCode?: string;
    /**
     * The currency that the payment was made in
     */
    currency?: string;
    /**
     * Payee data associated with a payment. Either individual or company must be populated
     */
    payee?: PayoutPayeeV3;
    /**
     * The id of the payment
     */
    paymentId: string;
    /**
     * <p>Any value here will override the memo value in the parent payout</p>
     *
     * @remarks
     * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
     *
     */
    paymentMemo?: string;
    /**
     * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
     *
     * @remarks
     * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
     *
     */
    paymentMetadata?: string;
    /**
     * A reference identifier for the payor for the given payee payment
     */
    payorPaymentId?: string;
    /**
     * Indicates the 3rd party system involved in making this payment
     */
    railsId?: string;
    /**
     * The remoteId supplied by the payor that identifies the payee
     */
    remoteId?: string;
    /**
     * <p>The identifier for the remote payments system if not Velo</p>
     *
     * @remarks
     *
     */
    remoteSystemId?: string;
    /**
     * The identifier of the source account to debit the payment from
     */
    sourceAccountName?: string;
    /**
     * Current status of payment. One of the following values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, BANK_PAYMENT_REQUESTED
     */
    status?: string;
    /**
     * The transmission method of the payment. One of the following values: ACH, SAME_DAY_ACH, WIRE, LOCAL, SWIFT
     */
    transmissionType?: string;
    /**
     * Can this paynent be withdrawn
     */
    withdrawable?: boolean;
}
