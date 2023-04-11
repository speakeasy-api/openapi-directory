import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter `/identity/get` results.
 */
export declare class IdentityGetRequestOptions extends SpeakeasyBase {
    /**
     * A list of `account_ids` to retrieve for the Item.
     *
     * @remarks
     * Note: An error will be returned if a provided `account_id` is not associated with the Item.
     */
    accountIds?: string[];
}
