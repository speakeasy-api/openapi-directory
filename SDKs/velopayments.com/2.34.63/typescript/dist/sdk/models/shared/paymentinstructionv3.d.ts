import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optionally choose a specific transmission method for the payment
 */
export declare enum PaymentInstructionV3TransmissionTypeEnum {
    SameDayAch = "SAME_DAY_ACH",
    Wire = "WIRE",
    Ach = "ACH",
    Local = "LOCAL",
    Swift = "SWIFT"
}
/**
 * Instruction for creating a payment
 */
export declare class PaymentInstructionV3 extends SpeakeasyBase {
    /**
     * <p>Amount to send to Payee</p>
     *
     * @remarks
     * <p>The maximum payment amount is dependent on the currency</p>
     *
     */
    amount: number;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency: string;
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
     * Your identifier for the payee
     */
    remoteId: string;
    /**
     * <p>The identifier for the remote payments system if not Velo</p>
     *
     * @remarks
     * <p>Should only be used after consultation with Velo Payments</p>
     *
     */
    remoteSystemId?: string;
    /**
     * Must match a valid source account name belonging to the payor
     */
    sourceAccountName: string;
    /**
     * Optionally choose a specific transmission method for the payment
     */
    transmissionType?: PaymentInstructionV3TransmissionTypeEnum;
}
