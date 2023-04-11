import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Action } from "./googleprivacydlpv2action";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
import { GooglePrivacyDlpV2PrivacyMetric } from "./googleprivacydlpv2privacymetric";
/**
 * Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
 */
export declare class GooglePrivacyDlpV2RiskAnalysisJobConfig extends SpeakeasyBase {
    /**
     * Actions to execute at the completion of the job. Are executed in the order provided.
     */
    actions?: GooglePrivacyDlpV2Action[];
    /**
     * Privacy metric to compute for reidentification risk analysis.
     */
    privacyMetric?: GooglePrivacyDlpV2PrivacyMetric;
    /**
     * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
     */
    sourceTable?: GooglePrivacyDlpV2BigQueryTable;
}
