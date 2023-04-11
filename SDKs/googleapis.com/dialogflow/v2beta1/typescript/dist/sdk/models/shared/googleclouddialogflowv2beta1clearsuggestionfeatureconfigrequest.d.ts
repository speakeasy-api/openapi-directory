import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The participant role to remove the suggestion feature config. Only HUMAN_AGENT or END_USER can be used.
 */
export declare enum GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * Required. The type of the suggestion feature to remove.
 */
export declare enum GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    Faq = "FAQ",
    SmartReply = "SMART_REPLY",
    ConversationSummarization = "CONVERSATION_SUMMARIZATION"
}
/**
 * The request message for ConversationProfiles.ClearFeature.
 */
export declare class GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest extends SpeakeasyBase {
    /**
     * Required. The participant role to remove the suggestion feature config. Only HUMAN_AGENT or END_USER can be used.
     */
    participantRole?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum;
    /**
     * Required. The type of the suggestion feature to remove.
     */
    suggestionFeatureType?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum;
}
