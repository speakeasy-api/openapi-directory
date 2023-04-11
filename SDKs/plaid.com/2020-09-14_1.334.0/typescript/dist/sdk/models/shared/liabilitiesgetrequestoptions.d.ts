import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
 */
export declare class LiabilitiesGetRequestOptions extends SpeakeasyBase {
    /**
     * A list of accounts to retrieve for the Item.
     *
     * @remarks
     *
     * An error will be returned if a provided `account_id` is not associated with the Item
     */
    accountIds?: string[];
}
