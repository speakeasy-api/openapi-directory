import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spot set type `any`; A wildcard that matches all type of items
 */
export declare enum SpotSetTypeAnyTypeEnum {
    Any = "any"
}
export declare class SpotSetTypeAny extends SpeakeasyBase {
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
     * Spot set type `any`; A wildcard that matches all type of items
     */
    type?: SpotSetTypeAnyTypeEnum;
}
