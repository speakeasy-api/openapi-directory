import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2RiskAnalysisJobConfig } from "./googleprivacydlpv2riskanalysisjobconfig";
/**
 * Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
 */
export declare class GooglePrivacyDlpV2CreateDlpJobRequest extends SpeakeasyBase {
    /**
     * Controls what and how to inspect for findings.
     */
    inspectJob?: GooglePrivacyDlpV2InspectJobConfig;
    /**
     * The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    jobId?: string;
    /**
     * Deprecated. This field has no effect.
     */
    locationId?: string;
    /**
     * Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
     */
    riskJob?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
}
