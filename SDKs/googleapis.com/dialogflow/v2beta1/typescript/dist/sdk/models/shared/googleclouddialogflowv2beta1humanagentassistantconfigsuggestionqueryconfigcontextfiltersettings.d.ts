import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings that determine how to filter recent conversation context when generating suggestions.
 */
export declare class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings extends SpeakeasyBase {
    /**
     * If set to true, the last message from virtual agent (hand off message) and the message before it (trigger message of hand off) are dropped.
     */
    dropHandoffMessages?: boolean;
    /**
     * If set to true, all messages from ivr stage are dropped.
     */
    dropIvrMessages?: boolean;
    /**
     * If set to true, all messages from virtual agent are dropped.
     */
    dropVirtualAgentMessages?: boolean;
}
