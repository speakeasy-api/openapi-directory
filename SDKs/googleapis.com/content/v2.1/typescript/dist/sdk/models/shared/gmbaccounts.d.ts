import { SpeakeasyBase } from "../../../internal/utils";
import { GmbAccountsGmbAccount } from "./gmbaccountsgmbaccount";
export declare class GmbAccounts extends SpeakeasyBase {
    /**
     * The ID of the Merchant Center account.
     */
    accountId?: string;
    /**
     * A list of Business Profiles which are available to the merchant.
     */
    gmbAccounts?: GmbAccountsGmbAccount[];
}
