import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";
/**
 * The result of adding a group.
 */
export declare class AddDimensionGroupResponse extends SpeakeasyBase {
    /**
     * All groups of a dimension after adding a group to that dimension.
     */
    dimensionGroups?: DimensionGroup[];
}
