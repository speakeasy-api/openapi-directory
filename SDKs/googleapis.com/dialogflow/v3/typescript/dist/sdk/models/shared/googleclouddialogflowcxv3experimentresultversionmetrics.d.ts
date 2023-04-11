import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ExperimentResultMetric } from "./googleclouddialogflowcxv3experimentresultmetric";
/**
 * Version variant and associated metrics.
 */
export declare class GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics extends SpeakeasyBase {
    /**
     * The metrics and corresponding confidence intervals in the inference result.
     */
    metrics?: GoogleCloudDialogflowCxV3ExperimentResultMetric[];
    /**
     * Number of sessions that were allocated to this version.
     */
    sessionCount?: number;
    /**
     * The name of the flow Version. Format: `projects//locations//agents//flows//versions/`.
     */
    version?: string;
}
