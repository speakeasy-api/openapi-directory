import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message for specifying a window around a finding to apply a detection rule.
 */
export declare class GooglePrivacyDlpV2Proximity extends SpeakeasyBase {
    /**
     * Number of characters after the finding to consider.
     */
    windowAfter?: number;
    /**
     * Number of characters before the finding to consider. For tabular data, if you want to modify the likelihood of an entire column of findngs, set this to 1. For more information, see [Hotword example: Set the match likelihood of a table column] (https://cloud.google.com/dlp/docs/creating-custom-infotypes-likelihood#match-column-values).
     */
    windowBefore?: number;
}
