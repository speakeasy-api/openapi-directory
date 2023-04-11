import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scoring configurations for a source while processing a Search or Suggest request.
 */
export declare class ScoringConfig extends SpeakeasyBase {
    /**
     * Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI.
     */
    disableFreshness?: boolean;
    /**
     * Whether to personalize the results. By default, personal signals will be used to boost results.
     */
    disablePersonalization?: boolean;
}
