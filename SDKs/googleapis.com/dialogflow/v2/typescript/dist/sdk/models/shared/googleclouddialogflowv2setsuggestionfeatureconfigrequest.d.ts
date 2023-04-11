import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig";
/**
 * Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used.
 */
export declare enum GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * The request message for ConversationProfiles.SetSuggestionFeature.
 */
export declare class GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest extends SpeakeasyBase {
    /**
     * Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used.
     */
    participantRole?: GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum;
    /**
     * Config for suggestion features.
     */
    suggestionFeatureConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig;
}
