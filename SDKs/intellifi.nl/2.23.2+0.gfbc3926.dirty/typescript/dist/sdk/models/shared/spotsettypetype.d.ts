import { SpeakeasyBase } from "../../../internal/utils";
import { ItemTypeEnum } from "./itemtypeenum";
/**
 * Spot set type `type`; Matches Items with the same Type as specified by this set.
 */
export declare enum SpotSetTypeTypeTypeEnum {
    Type = "type"
}
export declare class SpotSetTypeTypeInput extends SpeakeasyBase {
    /**
     * Type of item.
     */
    itemType?: ItemTypeEnum;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Spot set type `type`; Matches Items with the same Type as specified by this set.
     */
    type?: SpotSetTypeTypeTypeEnum;
}
export declare class SpotSetTypeType extends SpeakeasyBase {
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Type of item.
     */
    itemType?: ItemTypeEnum;
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
     * Spot set type `type`; Matches Items with the same Type as specified by this set.
     */
    type?: SpotSetTypeTypeTypeEnum;
}
