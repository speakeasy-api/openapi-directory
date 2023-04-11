import { SpeakeasyBase } from "../../../internal/utils";
import { AccountInput } from "./account";
import { AccountsCustomBatchRequestEntryLinkRequest } from "./accountscustombatchrequestentrylinkrequest";
/**
 * A batch entry encoding a single non-batch accounts request.
 */
export declare class AccountsCustomBatchRequestEntryInput extends SpeakeasyBase {
    /**
     * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
     */
    account?: AccountInput;
    /**
     * The ID of the targeted account. Only defined if the method is not `insert`.
     */
    accountId?: string;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`.
     */
    force?: boolean;
    /**
     * Label IDs for the 'updatelabels' request.
     */
    labelIds?: string[];
    linkRequest?: AccountsCustomBatchRequestEntryLinkRequest;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`claimWebsite`" - "`delete`" - "`get`" - "`insert`" - "`link`" - "`update`"
     */
    method?: string;
    /**
     * Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict.
     */
    overwrite?: boolean;
    /**
     * Controls which fields are visible. Only applicable if the method is 'get'.
     */
    view?: string;
}
