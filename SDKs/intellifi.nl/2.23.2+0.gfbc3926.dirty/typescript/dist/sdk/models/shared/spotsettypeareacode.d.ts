import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spot set type `areacode`; Matches Item with the same Area Code as specified by this set
 */
export declare enum SpotSetTypeAreacodeTypeEnum {
    Areacode = "areacode"
}
export declare class SpotSetTypeAreacodeInput extends SpeakeasyBase {
    /**
     * Area Code
     */
    areaCode?: number;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Spot set type `areacode`; Matches Item with the same Area Code as specified by this set
     */
    type?: SpotSetTypeAreacodeTypeEnum;
}
export declare class SpotSetTypeAreacode extends SpeakeasyBase {
    /**
     * Area Code
     */
    areaCode?: number;
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Unique identifier for resource.
     */
    spotId?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Spot set type `areacode`; Matches Item with the same Area Code as specified by this set
     */
    type?: SpotSetTypeAreacodeTypeEnum;
}
