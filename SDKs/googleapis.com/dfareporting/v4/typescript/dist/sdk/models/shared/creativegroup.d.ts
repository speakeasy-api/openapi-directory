import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Contains properties of a creative group.
 */
export declare class CreativeGroup extends SpeakeasyBase {
    /**
     * Account ID of this creative group. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this creative group. This is a required field on insertion.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive.
     */
    groupNumber?: number;
    /**
     * ID of this creative group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup".
     */
    kind?: string;
    /**
     * Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser.
     */
    name?: string;
    /**
     * Subaccount ID of this creative group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
}
