import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Audio preprocessing configuration.
 */
export declare class Audio extends SpeakeasyBase {
    /**
     * Enable boosting high frequency components. The default is `false`.
     */
    highBoost?: boolean;
    /**
     * Enable boosting low frequency components. The default is `false`.
     */
    lowBoost?: boolean;
    /**
     * Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0 (the default), where: * -24 is the Advanced Television Systems Committee (ATSC A/85) standard * -23 is the EU R128 broadcast standard * -19 is the prior standard for online mono audio * -18 is the ReplayGain standard * -16 is the prior standard for stereo audio * -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo * 0 disables normalization
     */
    lufs?: number;
}
