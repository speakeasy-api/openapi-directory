import { SpeakeasyBase } from "../../../internal/utils";
export declare class RejectedPaymentV3 extends SpeakeasyBase {
    /**
     * The amount of the payment in minor units
     */
    amount: number;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currencyType: string;
    /**
     * If the payment was submitted in a csv payout then this will be the line number of the payment in the file
     */
    lineNumber?: number;
    /**
     * A more general rejection message than the reason property
     */
    message?: string;
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
     * The reason for the payment being rejected
     */
    reason: string;
    /**
     * The reason code as determined by Velo
     */
    reasonCode?: string;
    /**
     * The remoteId supplied by the payor that identifies the payee
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
