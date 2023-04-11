import { SpeakeasyBase } from "../../../internal/utils";
import { FilterView } from "./filterview";
/**
 * Updates properties of the filter view.
 */
export declare class UpdateFilterViewRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * A filter view.
     */
    filter?: FilterView;
}
