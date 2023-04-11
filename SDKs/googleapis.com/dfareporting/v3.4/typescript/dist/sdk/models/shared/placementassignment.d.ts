import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Placement Assignment.
 */
export declare class PlacementAssignment extends SpeakeasyBase {
    /**
     * Whether this placement assignment is active. When true, the placement will be included in the ad's rotation.
     */
    active?: boolean;
    /**
     * ID of the placement to be assigned. This is a required field.
     */
    placementId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    placementIdDimensionValue?: DimensionValue;
    /**
     * Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslRequired?: boolean;
}
