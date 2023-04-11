import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
import { GooglePrivacyDlpV2CategoricalStatsResult } from "./googleprivacydlpv2categoricalstatsresult";
import { GooglePrivacyDlpV2DeltaPresenceEstimationResult } from "./googleprivacydlpv2deltapresenceestimationresult";
import { GooglePrivacyDlpV2KAnonymityResult } from "./googleprivacydlpv2kanonymityresult";
import { GooglePrivacyDlpV2KMapEstimationResult } from "./googleprivacydlpv2kmapestimationresult";
import { GooglePrivacyDlpV2LDiversityResult } from "./googleprivacydlpv2ldiversityresult";
import { GooglePrivacyDlpV2NumericalStatsResult } from "./googleprivacydlpv2numericalstatsresult";
import { GooglePrivacyDlpV2PrivacyMetric } from "./googleprivacydlpv2privacymetric";
import { GooglePrivacyDlpV2RequestedRiskAnalysisOptions } from "./googleprivacydlpv2requestedriskanalysisoptions";
/**
 * Result of a risk analysis operation request.
 */
export declare class GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails extends SpeakeasyBase {
    /**
     * Result of the categorical stats computation.
     */
    categoricalStatsResult?: GooglePrivacyDlpV2CategoricalStatsResult;
    /**
     * Result of the δ-presence computation. Note that these results are an estimation, not exact values.
     */
    deltaPresenceEstimationResult?: GooglePrivacyDlpV2DeltaPresenceEstimationResult;
    /**
     * Result of the k-anonymity computation.
     */
    kAnonymityResult?: GooglePrivacyDlpV2KAnonymityResult;
    /**
     * Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
     */
    kMapEstimationResult?: GooglePrivacyDlpV2KMapEstimationResult;
    /**
     * Result of the l-diversity computation.
     */
    lDiversityResult?: GooglePrivacyDlpV2LDiversityResult;
    /**
     * Result of the numerical stats computation.
     */
    numericalStatsResult?: GooglePrivacyDlpV2NumericalStatsResult;
    /**
     * Risk analysis options.
     */
    requestedOptions?: GooglePrivacyDlpV2RequestedRiskAnalysisOptions;
    /**
     * Privacy metric to compute for reidentification risk analysis.
     */
    requestedPrivacyMetric?: GooglePrivacyDlpV2PrivacyMetric;
    /**
     * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
     */
    requestedSourceTable?: GooglePrivacyDlpV2BigQueryTable;
}
