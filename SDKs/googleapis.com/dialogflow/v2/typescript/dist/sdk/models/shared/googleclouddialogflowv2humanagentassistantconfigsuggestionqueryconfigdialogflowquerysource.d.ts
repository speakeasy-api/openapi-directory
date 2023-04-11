import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dialogflow source setting. Supported feature: DIALOGFLOW_ASSIST.
 */
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource extends SpeakeasyBase {
    /**
     * Required. The name of a Dialogflow virtual agent used for end user side intent detection and suggestion. Format: `projects//locations//agent`. When multiple agents are allowed in the same Dialogflow project.
     */
    agent?: string;
}
