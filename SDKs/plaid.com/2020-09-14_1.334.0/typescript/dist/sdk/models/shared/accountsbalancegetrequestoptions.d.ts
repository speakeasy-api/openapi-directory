import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter `/accounts/balance/get` results.
 */
export declare class AccountsBalanceGetRequestOptions extends SpeakeasyBase {
    /**
     * A list of `account_ids` to retrieve for the Item. The default value is `null`.
     *
     * @remarks
     *
     * Note: An error will be returned if a provided `account_id` is not associated with the Item.
     */
    accountIds?: string[];
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`) indicating the oldest acceptable balance when making a request to `/accounts/balance/get`.
     *
     * @remarks
     *
     * If the balance that is pulled for `ins_128026` (Capital One) is older than the given timestamp, an `INVALID_REQUEST` error with the code of `LAST_UPDATED_DATETIME_OUT_OF_RANGE` will be returned with the most recent timestamp for the requested account contained in the response.
     *
     * This field is only used when the institution is `ins_128026` (Capital One), in which case a value must be provided or an `INVALID_REQUEST` error with the code of `INVALID_FIELD` will be returned. For all other institutions, this field is ignored.
     */
    minLastUpdatedDatetime?: Date;
}
