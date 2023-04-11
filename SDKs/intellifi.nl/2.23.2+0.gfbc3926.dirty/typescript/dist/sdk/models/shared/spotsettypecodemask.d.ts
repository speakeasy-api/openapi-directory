import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spot set type `codemask`; Matches all Items that return true as a result of using the following equation ((Item.code & Item.mask) == (Set.code & Set.mask)).
 */
export declare enum SpotSetTypeCodemaskTypeEnum {
    Codemask = "codemask"
}
export declare class SpotSetTypeCodemaskInput extends SpeakeasyBase {
    /**
     * Item code
     */
    code?: string;
    /**
     * Mask which part of the code should match.
     */
    mask?: string;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Spot set type `codemask`; Matches all Items that return true as a result of using the following equation ((Item.code & Item.mask) == (Set.code & Set.mask)).
     */
    type?: SpotSetTypeCodemaskTypeEnum;
}
export declare class SpotSetTypeCodemask extends SpeakeasyBase {
    /**
     * Item code
     */
    code?: string;
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Mask which part of the code should match.
     */
    mask?: string;
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
     * Spot set type `codemask`; Matches all Items that return true as a result of using the following equation ((Item.code & Item.mask) == (Set.code & Set.mask)).
     */
    type?: SpotSetTypeCodemaskTypeEnum;
}
