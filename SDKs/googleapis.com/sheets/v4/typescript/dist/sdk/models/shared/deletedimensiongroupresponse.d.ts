import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";
/**
 * The result of deleting a group.
 */
export declare class DeleteDimensionGroupResponse extends SpeakeasyBase {
    /**
     * All groups of a dimension after deleting a group from that dimension.
     */
    dimensionGroups?: DimensionGroup[];
}
