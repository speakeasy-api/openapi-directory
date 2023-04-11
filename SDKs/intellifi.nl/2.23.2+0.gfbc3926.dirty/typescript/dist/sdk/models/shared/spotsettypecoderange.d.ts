import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spot set type `coderange`; Matches all Items codes if within specified range as specified by this set
 */
export declare enum SpotSetTypeCoderangeTypeEnum {
    Coderange = "coderange"
}
export declare class SpotSetTypeCoderangeInput extends SpeakeasyBase {
    /**
     * End of the code range
     */
    end?: string;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Start of the code range
     */
    start?: string;
    /**
     * Spot set type `coderange`; Matches all Items codes if within specified range as specified by this set
     */
    type?: SpotSetTypeCoderangeTypeEnum;
}
export declare class SpotSetTypeCoderange extends SpeakeasyBase {
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * End of the code range
     */
    end?: string;
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
     * Start of the code range
     */
    start?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Spot set type `coderange`; Matches all Items codes if within specified range as specified by this set
     */
    type?: SpotSetTypeCoderangeTypeEnum;
}
