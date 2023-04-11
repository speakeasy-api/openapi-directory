import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Smart compose specific configuration for evaluation job.
 */
export declare class GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig extends SpeakeasyBase {
    /**
     * The allowlist document resource name. Format: `projects//knowledgeBases//documents/`. Only used for smart compose model.
     */
    allowlistDocument?: string;
    /**
     * Required. The model to be evaluated can return multiple results with confidence score on each query. These results will be sorted by the descending order of the scores and we only keep the first max_result_count results as the final results to evaluate.
     */
    maxResultCount?: number;
}
