import { SpeakeasyBase } from "../../../internal/utils";
import { GmbAccountsGmbAccount } from "./gmbaccountsgmbaccount";
export declare class GmbAccounts extends SpeakeasyBase {
    /**
     * The ID of the Merchant Center account.
     */
    accountId?: string;
    /**
     * A list of GMB accounts which are available to the merchant.
     */
    gmbAccounts?: GmbAccountsGmbAccount[];
}
