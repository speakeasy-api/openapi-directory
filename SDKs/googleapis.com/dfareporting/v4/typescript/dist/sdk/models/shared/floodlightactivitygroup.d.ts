import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Type of the floodlight activity group. This is a required field that is read-only after insertion.
 */
export declare enum FloodlightActivityGroupTypeEnum {
    Counter = "COUNTER",
    Sale = "SALE"
}
/**
 * Contains properties of a Floodlight activity group.
 */
export declare class FloodlightActivityGroup extends SpeakeasyBase {
    /**
     * Account ID of this floodlight activity group. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Floodlight configuration ID of this floodlight activity group. This is a required field.
     */
    floodlightConfigurationId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    floodlightConfigurationIdDimensionValue?: DimensionValue;
    /**
     * ID of this floodlight activity group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup".
     */
    kind?: string;
    /**
     * Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes.
     */
    name?: string;
    /**
     * Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion.
     */
    tagString?: string;
    /**
     * Type of the floodlight activity group. This is a required field that is read-only after insertion.
     */
    type?: FloodlightActivityGroupTypeEnum;
}
