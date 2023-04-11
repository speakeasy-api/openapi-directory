import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
/**
 * The channel with score.
 */
export declare class SasPortalChannelWithScore extends SpeakeasyBase {
    /**
     * Frequency range from `low_frequency` to `high_frequency`.
     */
    frequencyRange?: SasPortalFrequencyRange;
    /**
     * The channel score, normalized to be in the range [0,100].
     */
    score?: number;
}
