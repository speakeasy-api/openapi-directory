import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAnAccountTransferParameters extends SpeakeasyBase {
    /**
     * The identifier for the account that will send the transfer.
     */
    accountId: string;
    /**
     * The transfer amount in the minor unit of the account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The description you choose to give the transfer.
     */
    description: string;
    /**
     * The identifier for the account that will receive the transfer.
     */
    destinationAccountId: string;
    /**
     * Whether the transfer requires explicit approval via the dashboard or API.
     */
    requireApproval?: boolean;
}
