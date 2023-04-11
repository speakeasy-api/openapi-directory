import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Organizes placements according to the contents of their associated webpages.
 */
export declare class ContentCategory extends SpeakeasyBase {
    /**
     * Account ID of this content category. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * ID of this content category. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory".
     */
    kind?: string;
    /**
     * Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account.
     */
    name?: string;
}
