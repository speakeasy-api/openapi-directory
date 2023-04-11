import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Value of the dimension.
 */
export declare class DimensionDimensionValue extends SpeakeasyBase {
    /**
     * Id of the dimension.
     */
    id?: number;
    /**
     * Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids.
     */
    name?: string;
    /**
     * Percent of total impressions for a dimension type. e.g. {dimension_type: 'GENDER', [{dimension_value: {id: 1, name: 'MALE', percentage: 60}}]} Gender MALE is 60% of all impressions which have gender.
     */
    percentage?: number;
}
