import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedRange } from "./protectedrange";
/**
 * Updates an existing protected range with the specified protectedRangeId.
 */
export declare class UpdateProtectedRangeRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * A protected range.
     */
    protectedRange?: ProtectedRange;
}
