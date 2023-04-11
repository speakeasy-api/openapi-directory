import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateACheckDepositParameters extends SpeakeasyBase {
    /**
     * The identifier for the Account to deposit the check in.
     */
    accountId: string;
    /**
     * The deposit amount in the minor unit of the account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The File containing the check's back image.
     */
    backImageFileId: string;
    /**
     * The currency to use for the deposit.
     */
    currency: string;
    /**
     * The File containing the check's front image.
     */
    frontImageFileId: string;
}
