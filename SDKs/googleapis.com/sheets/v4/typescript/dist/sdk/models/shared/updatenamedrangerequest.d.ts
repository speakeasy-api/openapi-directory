import { SpeakeasyBase } from "../../../internal/utils";
import { NamedRange } from "./namedrange";
/**
 * Updates properties of the named range with the specified namedRangeId.
 */
export declare class UpdateNamedRangeRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * A named range.
     */
    namedRange?: NamedRange;
}
