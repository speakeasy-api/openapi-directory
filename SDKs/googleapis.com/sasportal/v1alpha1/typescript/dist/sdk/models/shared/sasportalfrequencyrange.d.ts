import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Frequency range from `low_frequency` to `high_frequency`.
 */
export declare class SasPortalFrequencyRange extends SpeakeasyBase {
    /**
     * The highest frequency of the frequency range in MHz.
     */
    highFrequencyMhz?: number;
    /**
     * The lowest frequency of the frequency range in MHz.
     */
    lowFrequencyMhz?: number;
}
