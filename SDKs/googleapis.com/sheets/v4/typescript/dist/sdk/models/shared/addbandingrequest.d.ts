import { SpeakeasyBase } from "../../../internal/utils";
import { BandedRange } from "./bandedrange";
/**
 * Adds a new banded range to the spreadsheet.
 */
export declare class AddBandingRequest extends SpeakeasyBase {
    /**
     * A banded (alternating colors) range in a sheet.
     */
    bandedRange?: BandedRange;
}
