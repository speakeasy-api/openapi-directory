import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
/**
 * An entry in a DPA's move list.
 */
export declare class SasPortalDpaMoveList extends SpeakeasyBase {
    /**
     * The ID of the DPA.
     */
    dpaId?: string;
    /**
     * Frequency range from `low_frequency` to `high_frequency`.
     */
    frequencyRange?: SasPortalFrequencyRange;
}
