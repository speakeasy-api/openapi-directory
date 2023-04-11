import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionfeatureconfig";
/**
 * Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used.
 */
export declare enum GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * The request message for ConversationProfiles.SetSuggestionFeature.
 */
export declare class GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest extends SpeakeasyBase {
    /**
     * Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used.
     */
    participantRole?: GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum;
    /**
     * Config for suggestion features.
     */
    suggestionFeatureConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig;
}
