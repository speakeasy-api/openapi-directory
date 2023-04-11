import { SpeakeasyBase } from "../../../internal/utils";
export declare class SimulateAnAchTransferToYourAccountParameters extends SpeakeasyBase {
    /**
     * The identifier of the Account Number the inbound ACH Transfer is for.
     */
    accountNumberId: string;
    /**
     * The transfer amount in cents. A positive amount originates a credit transfer pushing funds to the receiving account. A negative amount originates a debit transfer pulling funds from the receiving account.
     */
    amount: number;
    /**
     * The description of the date of the transfer.
     */
    companyDescriptiveDate?: string;
    /**
     * Data associated with the transfer set by the sender.
     */
    companyDiscretionaryData?: string;
    /**
     * The description of the transfer set by the sender.
     */
    companyEntryDescription?: string;
    /**
     * The sender's company id.
     */
    companyId?: string;
    /**
     * The name of the sender.
     */
    companyName?: string;
}
