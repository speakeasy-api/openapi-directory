import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spot set type `codelength`; Matches all Item codes that have the exact same length in bits as specified by this value
 */
export declare enum SpotSetTypeCodelengthTypeEnum {
    Codelength = "codelength"
}
export declare class SpotSetTypeCodelengthInput extends SpeakeasyBase {
    /**
     * The length of the item code in bits
     */
    lengthBits?: number;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Spot set type `codelength`; Matches all Item codes that have the exact same length in bits as specified by this value
     */
    type?: SpotSetTypeCodelengthTypeEnum;
}
export declare class SpotSetTypeCodelength extends SpeakeasyBase {
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * The length of the item code in bits
     */
    lengthBits?: number;
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
     * Spot set type `codelength`; Matches all Item codes that have the exact same length in bits as specified by this value
     */
    type?: SpotSetTypeCodelengthTypeEnum;
}
