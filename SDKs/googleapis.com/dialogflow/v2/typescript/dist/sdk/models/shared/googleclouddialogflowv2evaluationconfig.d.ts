import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig } from "./googleclouddialogflowv2evaluationconfigsmartcomposeconfig";
import { GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig } from "./googleclouddialogflowv2evaluationconfigsmartreplyconfig";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
/**
 * The configuration for model evaluation.
 */
export declare class GoogleCloudDialogflowV2EvaluationConfig extends SpeakeasyBase {
    /**
     * Required. Datasets used for evaluation.
     */
    datasets?: GoogleCloudDialogflowV2InputDataset[];
    /**
     * Smart compose specific configuration for evaluation job.
     */
    smartComposeConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig;
    /**
     * Smart reply specific configuration for evaluation job.
     */
    smartReplyConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig;
}
