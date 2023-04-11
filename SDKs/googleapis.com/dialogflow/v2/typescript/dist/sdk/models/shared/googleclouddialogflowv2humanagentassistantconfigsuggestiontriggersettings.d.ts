import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings of suggestion trigger.
 */
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings extends SpeakeasyBase {
    /**
     * Do not trigger if last utterance is small talk.
     */
    noSmalltalk?: boolean;
    /**
     * Only trigger suggestion if participant role of last utterance is END_USER.
     */
    onlyEndUser?: boolean;
}
