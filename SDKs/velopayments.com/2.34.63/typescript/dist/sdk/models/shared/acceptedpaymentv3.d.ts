import { SpeakeasyBase } from "../../../internal/utils";
export declare class AcceptedPaymentV3 extends SpeakeasyBase {
    /**
     * The amount of the payment in minor units
     */
    amount: number;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currencyType: string;
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
    payorPaymentId: string;
    /**
     * Indicates the 3rd party system involved in making this payment
     */
    railsId: string;
    /**
     * Your identifier for the payee
     */
    remoteId: string;
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
    sourceAccountName: string;
}
