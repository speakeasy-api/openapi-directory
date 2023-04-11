import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CategoricalStatsConfig } from "./googleprivacydlpv2categoricalstatsconfig";
import { GooglePrivacyDlpV2DeltaPresenceEstimationConfig } from "./googleprivacydlpv2deltapresenceestimationconfig";
import { GooglePrivacyDlpV2KAnonymityConfig } from "./googleprivacydlpv2kanonymityconfig";
import { GooglePrivacyDlpV2KMapEstimationConfig } from "./googleprivacydlpv2kmapestimationconfig";
import { GooglePrivacyDlpV2LDiversityConfig } from "./googleprivacydlpv2ldiversityconfig";
import { GooglePrivacyDlpV2NumericalStatsConfig } from "./googleprivacydlpv2numericalstatsconfig";
/**
 * Privacy metric to compute for reidentification risk analysis.
 */
export declare class GooglePrivacyDlpV2PrivacyMetric extends SpeakeasyBase {
    /**
     * Compute numerical stats over an individual column, including number of distinct values and value count distribution.
     */
    categoricalStatsConfig?: GooglePrivacyDlpV2CategoricalStatsConfig;
    /**
     * δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
     */
    deltaPresenceEstimationConfig?: GooglePrivacyDlpV2DeltaPresenceEstimationConfig;
    /**
     * k-anonymity metric, used for analysis of reidentification risk.
     */
    kAnonymityConfig?: GooglePrivacyDlpV2KAnonymityConfig;
    /**
     * Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
     */
    kMapEstimationConfig?: GooglePrivacyDlpV2KMapEstimationConfig;
    /**
     * l-diversity metric, used for analysis of reidentification risk.
     */
    lDiversityConfig?: GooglePrivacyDlpV2LDiversityConfig;
    /**
     * Compute numerical stats over an individual column, including min, max, and quantiles.
     */
    numericalStatsConfig?: GooglePrivacyDlpV2NumericalStatsConfig;
}
