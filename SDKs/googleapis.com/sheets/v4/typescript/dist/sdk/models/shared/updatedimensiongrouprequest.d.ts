import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";
/**
 * Updates the state of the specified group.
 */
export declare class UpdateDimensionGroupRequest extends SpeakeasyBase {
    /**
     * A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.
     */
    dimensionGroup?: DimensionGroup;
    /**
     * The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
}
