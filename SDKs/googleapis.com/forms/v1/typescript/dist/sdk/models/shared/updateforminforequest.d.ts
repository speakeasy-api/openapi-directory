import { SpeakeasyBase } from "../../../internal/utils";
import { InfoInput } from "./info";
/**
 * Update Form's Info.
 */
export declare class UpdateFormInfoRequestInput extends SpeakeasyBase {
    /**
     * The general information for a form.
     */
    info?: InfoInput;
    /**
     * Required. Only values named in this mask are changed. At least one field must be specified. The root `info` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field.
     */
    updateMask?: string;
}
