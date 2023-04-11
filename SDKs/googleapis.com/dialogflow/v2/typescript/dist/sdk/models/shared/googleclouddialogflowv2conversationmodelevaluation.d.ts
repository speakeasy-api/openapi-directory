import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EvaluationConfig } from "./googleclouddialogflowv2evaluationconfig";
import { GoogleCloudDialogflowV2SmartReplyMetrics } from "./googleclouddialogflowv2smartreplymetrics";
/**
 * Represents evaluation result of a conversation model.
 */
export declare class GoogleCloudDialogflowV2ConversationModelEvaluation extends SpeakeasyBase {
    /**
     * Output only. Creation time of this model.
     */
    createTime?: string;
    /**
     * Optional. The display name of the model evaluation. At most 64 bytes long.
     */
    displayName?: string;
    /**
     * The configuration for model evaluation.
     */
    evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;
    /**
     * The resource name of the evaluation. Format: `projects//conversationModels//evaluations/`
     */
    name?: string;
    /**
     * Output only. Human eval template in csv format. It tooks real-world conversations provided through input dataset, generates example suggestions for customer to verify quality of the model. For Smart Reply, the generated csv file contains columns of Context, (Suggestions,Q1,Q2)*3, Actual reply. Context contains at most 10 latest messages in the conversation prior to the current suggestion. Q1: "Would you send it as the next message of agent?" Evaluated based on whether the suggest is appropriate to be sent by agent in current context. Q2: "Does the suggestion move the conversation closer to resolution?" Evaluated based on whether the suggestion provide solutions, or answers customer's question or collect information from customer to resolve the customer's issue. Actual reply column contains the actual agent reply sent in the context.
     */
    rawHumanEvalTemplateCsv?: string;
    /**
     * The evaluation metrics for smart reply model.
     */
    smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
}
/**
 * Represents evaluation result of a conversation model.
 */
export declare class GoogleCloudDialogflowV2ConversationModelEvaluationInput extends SpeakeasyBase {
    /**
     * Optional. The display name of the model evaluation. At most 64 bytes long.
     */
    displayName?: string;
    /**
     * The configuration for model evaluation.
     */
    evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;
    /**
     * The resource name of the evaluation. Format: `projects//conversationModels//evaluations/`
     */
    name?: string;
    /**
     * The evaluation metrics for smart reply model.
     */
    smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
}
