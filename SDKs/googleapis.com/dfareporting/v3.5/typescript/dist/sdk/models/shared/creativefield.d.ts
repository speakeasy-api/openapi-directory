import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Contains properties of a creative field.
 */
export declare class CreativeField extends SpeakeasyBase {
    /**
     * Account ID of this creative field. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this creative field. This is a required field on insertion.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * ID of this creative field. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField".
     */
    kind?: string;
    /**
     * Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser.
     */
    name?: string;
    /**
     * Subaccount ID of this creative field. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
}
