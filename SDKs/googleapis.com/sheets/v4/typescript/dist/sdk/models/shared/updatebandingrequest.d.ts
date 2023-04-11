import { SpeakeasyBase } from "../../../internal/utils";
import { BandedRange } from "./bandedrange";
/**
 * Updates properties of the supplied banded range.
 */
export declare class UpdateBandingRequest extends SpeakeasyBase {
    /**
     * A banded (alternating colors) range in a sheet.
     */
    bandedRange?: BandedRange;
    /**
     * The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
}
