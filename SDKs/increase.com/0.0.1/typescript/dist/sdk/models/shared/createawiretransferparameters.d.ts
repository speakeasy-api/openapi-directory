import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAWireTransferParameters extends SpeakeasyBase {
    /**
     * The identifier for the account that will send the transfer.
     */
    accountId: string;
    /**
     * The account number for the destination account.
     */
    accountNumber?: string;
    /**
     * The transfer amount in cents.
     */
    amount: number;
    /**
     * The beneficiary's address line 1.
     */
    beneficiaryAddressLine1?: string;
    /**
     * The beneficiary's address line 2.
     */
    beneficiaryAddressLine2?: string;
    /**
     * The beneficiary's address line 3.
     */
    beneficiaryAddressLine3?: string;
    /**
     * The beneficiary's name.
     */
    beneficiaryName: string;
    /**
     * The ID of an External Account to initiate a transfer to. If this parameter is provided, `account_number` and `routing_number` must be absent.
     */
    externalAccountId?: string;
    /**
     * The message that will show on the recipient's bank statement.
     */
    messageToRecipient: string;
    /**
     * Whether the transfer requires explicit approval via the dashboard or API.
     */
    requireApproval?: boolean;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.
     */
    routingNumber?: string;
}
