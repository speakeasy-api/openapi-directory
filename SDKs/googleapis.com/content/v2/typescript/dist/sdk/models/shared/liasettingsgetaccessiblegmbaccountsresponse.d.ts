import { SpeakeasyBase } from "../../../internal/utils";
import { GmbAccountsGmbAccount } from "./gmbaccountsgmbaccount";
/**
 * Successful response
 */
export declare class LiasettingsGetAccessibleGmbAccountsResponse extends SpeakeasyBase {
    /**
     * The ID of the Merchant Center account.
     */
    accountId?: string;
    /**
     * A list of GMB accounts which are available to the merchant.
     */
    gmbAccounts?: GmbAccountsGmbAccount[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#liasettingsGetAccessibleGmbAccountsResponse".
     */
    kind?: string;
}
