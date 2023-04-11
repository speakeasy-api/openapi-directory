import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Operator
 */
export declare enum SpotSetTypeExtendedOperatorEnum {
    Gt = "gt",
    Gte = "gte",
    Eq = "eq",
    In = "in",
    Ne = "ne",
    Lt = "lt",
    Lte = "lte",
    Starts = "starts",
    Ends = "ends"
}
/**
 * Spot set type `extended`; Items that have the extended property (key) and match the requirement for value using the specified operator, as specified by this set
 */
export declare enum SpotSetTypeExtendedTypeEnum {
    Extended = "extended"
}
export declare class SpotSetTypeExtendedInput extends SpeakeasyBase {
    /**
     * Extended data property key
     */
    key?: string;
    /**
     * Operator
     */
    operator?: SpotSetTypeExtendedOperatorEnum;
    /**
     * Spot set unique identifier. Must be unique within a single device
     */
    setid?: number;
    /**
     * Spot set type `extended`; Items that have the extended property (key) and match the requirement for value using the specified operator, as specified by this set
     */
    type?: SpotSetTypeExtendedTypeEnum;
    /**
     * Extended data property value.
     */
    value?: any;
}
export declare class SpotSetTypeExtended extends SpeakeasyBase {
    /**
     * Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
     */
    createdBy?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Extended data property key
     */
    key?: string;
    /**
     * Operator
     */
    operator?: SpotSetTypeExtendedOperatorEnum;
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
     * Spot set type `extended`; Items that have the extended property (key) and match the requirement for value using the specified operator, as specified by this set
     */
    type?: SpotSetTypeExtendedTypeEnum;
    /**
     * Extended data property value.
     */
    value?: any;
}
