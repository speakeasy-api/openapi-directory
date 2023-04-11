import { SpeakeasyBase } from "../../../internal/utils";
import { TechnologyEnum } from "./technologyenum";
/**
 * Spot set type `technology`; Matches Items with the same Technology as specified by this set.
 */
export declare enum SpotSetTypeTechnologyTypeEnum {
    Technology = "technology"
}
export declare class SpotSetTypeTechnologyInput extends SpeakeasyBase {
    /**
     * Type of technology that was used to detect this item.
     */
    itemTechnology?: TechnologyEnum;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Spot set type `technology`; Matches Items with the same Technology as specified by this set.
     */
    type?: SpotSetTypeTechnologyTypeEnum;
}
export declare class SpotSetTypeTechnology extends SpeakeasyBase {
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Type of technology that was used to detect this item.
     */
    itemTechnology?: TechnologyEnum;
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
     * Spot set type `technology`; Matches Items with the same Technology as specified by this set.
     */
    type?: SpotSetTypeTechnologyTypeEnum;
}
