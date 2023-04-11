import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2RiskAnalysisJobConfig } from "./googleprivacydlpv2riskanalysisjobconfig";
/**
 * Risk analysis options.
 */
export declare class GooglePrivacyDlpV2RequestedRiskAnalysisOptions extends SpeakeasyBase {
    /**
     * Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
     */
    jobConfig?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
}
