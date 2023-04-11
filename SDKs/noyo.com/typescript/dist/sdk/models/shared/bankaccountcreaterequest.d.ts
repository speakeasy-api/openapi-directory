import { SpeakeasyBase } from "../../../internal/utils";
export declare class BankAccountCreateRequest extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber: string;
    /**
     * Name of the bank
     */
    bankName: string;
    /**
     * Whether the account is a checking account
     */
    isChecking: boolean;
    /**
     * Routing number
     */
    routingNumber: string;
}
