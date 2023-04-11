import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Groups advertisers together so that reports can be generated for the entire group at once.
 */
export declare class AdvertiserGroup extends SpeakeasyBase {
    /**
     * Account ID of this advertiser group. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * ID of this advertiser group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup".
     */
    kind?: string;
    /**
     * Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account.
     */
    name?: string;
}
